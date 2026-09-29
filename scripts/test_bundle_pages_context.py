"""Pruebas del escáner de imports, el resolutor de rutas y el naming de salida.

Ejecución:
    python -m unittest discover -s tests -p "test_bundle_pages_context.py" -v
"""

from __future__ import annotations

import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))

from bundle_pages_context import (  # noqa: E402
    DependencyGraph,
    assign_unique_file_names,
    extract_module_specifiers,
    load_path_aliases,
    route_segments,
    sanitize_file_stem,
    strip_comments,
    strip_json_comments,
)


class TestStripComments(unittest.TestCase):
    """El enmascarado de comentarios no debe tocar el código real."""

    def test_removes_line_comment(self) -> None:
        source = "const a = 1; // import x from '@/y'"
        masked = strip_comments(source)
        self.assertEqual(len(masked), len(source))
        self.assertEqual(masked, "const a = 1;" + " " * (len(source) - len("const a = 1;")))

    def test_removes_block_comment_but_keeps_newlines(self) -> None:
        source = "a;\n/* multi\nline */\nb;"
        masked = strip_comments(source)
        self.assertEqual(len(masked), len(source))
        self.assertEqual(masked.count("\n"), source.count("\n"))
        self.assertNotIn("multi", masked)
        self.assertIn("a;", masked)
        self.assertIn("b;", masked)

    def test_preserves_strings_containing_slashes(self) -> None:
        source = "const u = 'https://a.com/*x*/';"
        self.assertEqual(strip_comments(source), source)

    def test_preserves_template_literal_with_backticks(self) -> None:
        source = "const t = `a ${ `b` } c`;"
        self.assertEqual(strip_comments(source), source)

    def test_preserves_escaped_quote(self) -> None:
        source = "const s = 'it\\'s'; // gone"
        self.assertTrue(strip_comments(source).startswith("const s = 'it\\'s'"))

    def test_preserves_length(self) -> None:
        source = "import a from './a'; // comment\n/* block */\nconst b = 2;"
        self.assertEqual(len(strip_comments(source)), len(source))


class TestExtractModuleSpecifiers(unittest.TestCase):
    """Detección de todas las formas de import estático y dinámico."""

    def test_single_line_static_import(self) -> None:
        self.assertEqual(
            extract_module_specifiers("import ContactHero from '@/components/contacto/ContactHero';"),
            ["@/components/contacto/ContactHero"],
        )

    def test_multiline_named_import_block(self) -> None:
        source = "import {\n  useState,\n  useEffect,\n} from '@/hooks/useThing';\nconst x = 1;"
        self.assertEqual(extract_module_specifiers(source), ["@/hooks/useThing"])

    def test_default_plus_named_plus_namespace(self) -> None:
        source = "import Def, { a, b as c } from './mod';"
        self.assertEqual(extract_module_specifiers(source), ["./mod"])

    def test_namespace_import(self) -> None:
        self.assertEqual(extract_module_specifiers("import * as ns from './ns';"), ["./ns"])

    def test_side_effect_import(self) -> None:
        self.assertEqual(extract_module_specifiers("import './globals.css';"), ["./globals.css"])

    def test_dynamic_import(self) -> None:
        source = "const { ai } = await import('@/lib/genkit');"
        self.assertEqual(extract_module_specifiers(source), ["@/lib/genkit"])

    def test_re_export_star(self) -> None:
        self.assertEqual(extract_module_specifiers("export * from './a';"), ["./a"])

    def test_re_export_named(self) -> None:
        self.assertEqual(extract_module_specifiers("export { default as X } from './x';"), ["./x"])

    def test_require(self) -> None:
        self.assertEqual(extract_module_specifiers("const m = require('./cjs');"), ["./cjs"])

    def test_multiple_imports_same_line(self) -> None:
        self.assertEqual(
            extract_module_specifiers("import a from './a'; import b from './b';"),
            ["./a", "./b"],
        )

    def test_external_packages_ignored_downstream(self) -> None:
        source = "import React from 'react';\nimport { motion } from 'motion/react';"
        self.assertEqual(extract_module_specifiers(source), ["react", "motion/react"])

    def test_import_inside_comment_ignored(self) -> None:
        source = "// import fake from '@/no-existe'\nimport real from '@/si-existe';"
        self.assertEqual(extract_module_specifiers(source), ["@/si-existe"])

    def test_import_inside_block_comment_ignored(self) -> None:
        source = "/* import fake from '@/no-existe' */\nimport real from '@/si-existe';"
        self.assertEqual(extract_module_specifiers(source), ["@/si-existe"])

    def test_template_literal_specifier_skipped(self) -> None:
        self.assertEqual(extract_module_specifiers("import(`./pages/${slug}`);"), [])

    def test_deduplicated_preserving_order(self) -> None:
        source = "import a from './a';\nimport b from './b';\nimport c from './a';"
        self.assertEqual(extract_module_specifiers(source), ["./a", "./b"])


class TestGraphResolution(unittest.TestCase):
    """Resolución de alias, extensiones implícitas y carpetas con barril."""

    def setUp(self) -> None:
        self._tmp = tempfile.TemporaryDirectory()
        self.root = Path(self._tmp.name)
        (self.root / "src" / "components" / "ui").mkdir(parents=True)
        (self.root / "src" / "lib").mkdir(parents=True)
        (self.root / "src" / "data").mkdir(parents=True)
        (self.root / "src" / "components" / "ui" / "index.ts").write_text(
            "export * from './button';\n", encoding="utf-8"
        )
        (self.root / "src" / "components" / "ui" / "button.tsx").write_text("export const B = 1;\n", encoding="utf-8")
        (self.root / "src" / "lib" / "pricing.ts").write_text("export const P = 1;\n", encoding="utf-8")
        (self.root / "src" / "data" / "menu.json").write_text('{"a": 1}\n', encoding="utf-8")
        self.graph = DependencyGraph(self.root, {"@/": "src"})

    def tearDown(self) -> None:
        self._tmp.cleanup()

    def test_resolves_alias_with_implicit_extension(self) -> None:
        self.assertEqual(
            self.graph.resolve("@/lib/pricing", self.root),
            self.root / "src" / "lib" / "pricing.ts",
        )

    def test_resolves_barrel_directory(self) -> None:
        self.assertEqual(
            self.graph.resolve("@/components/ui", self.root),
            self.root / "src" / "components" / "ui" / "index.ts",
        )

    def test_resolves_relative_from_current_file(self) -> None:
        current = self.root / "src" / "components" / "ui" / "index.ts"
        self.assertEqual(self.graph.resolve("./button", current), self.root / "src" / "components" / "ui" / "button.tsx")

    def test_resolves_explicit_json(self) -> None:
        self.assertEqual(self.graph.resolve("@/data/menu.json", self.root), self.root / "src" / "data" / "menu.json")

    def test_bare_specifier_returns_none(self) -> None:
        self.assertIsNone(self.graph.resolve("next/navigation", self.root))
        self.assertIsNone(self.graph.resolve("react", self.root))

    def test_asset_returns_none_without_recording_unresolved(self) -> None:
        self.assertIsNone(self.graph.resolve("@/app/globals.css", self.root))
        self.assertEqual(self.graph.unresolved, set())

    def test_existing_css_file_is_still_excluded(self) -> None:
        (self.root / "src" / "app").mkdir(parents=True)
        css = self.root / "src" / "app" / "globals.css"
        css.write_text("body { color: red; }\n", encoding="utf-8")
        self.assertIsNone(self.graph.resolve("./globals.css", css))
        self.assertEqual(self.graph.unresolved, set())

    def test_css_not_inlined_in_walk(self) -> None:
        (self.root / "src" / "app").mkdir(parents=True)
        (self.root / "src" / "app" / "globals.css").write_text("body{}\n", encoding="utf-8")
        page = self.root / "src" / "app" / "page.tsx"
        page.write_text("import './globals.css';\nimport '@/lib/pricing';\n", encoding="utf-8")
        paths = [block.path for block in self.graph.walk([(page, "PAGINA RAIZ")])]
        self.assertNotIn(self.root / "src" / "app" / "globals.css", paths)
        self.assertIn(self.root / "src" / "lib" / "pricing.ts", paths)

    def test_json_is_inlined_but_not_traversed(self) -> None:
        (self.root / "src" / "data" / "nested.json").write_text('{"k":1}\n', encoding="utf-8")
        (self.root / "src" / "data" / "deep.json").write_text("{}\n", encoding="utf-8")
        page = self.root / "src" / "app" / "page2.tsx"
        page.parent.mkdir(parents=True, exist_ok=True)
        page.write_text("import { k } from '@/data/menu.json';\nexport const K = k;\n", encoding="utf-8")
        blocks = self.graph.walk([(page, "PAGINA RAIZ")])
        roles = {block.path.name: block.role for block in blocks}
        self.assertEqual(roles.get("menu.json"), "DATO JSON")
        self.assertEqual(len(blocks), 2)

    def test_missing_local_file_is_recorded_as_unresolved(self) -> None:
        self.assertIsNone(self.graph.resolve("@/lib/no-existe", self.root))
        self.assertIn("@/lib/no-existe", self.graph.unresolved)

    def test_traversal_outside_root_is_rejected(self) -> None:
        outside = self.root.parent / "fuera.ts"
        outside.write_text("export const X = 1;\n", encoding="utf-8")
        self.assertIsNone(self.graph.resolve(str(outside), self.root))

    def test_walk_expands_barrel_transitively(self) -> None:
        entry = self.root / "src" / "components" / "ui" / "entry.tsx"
        entry.write_text("import { B } from '@/components/ui';\nexport const E = B;\n", encoding="utf-8")
        paths = [block.path for block in self.graph.walk([(entry, "PAGINA RAIZ")])]
        self.assertIn(self.root / "src" / "components" / "ui" / "index.ts", paths)
        self.assertIn(self.root / "src" / "components" / "ui" / "button.tsx", paths)

    def test_walk_is_cycle_safe(self) -> None:
        a = self.root / "src" / "lib" / "a.ts"
        b = self.root / "src" / "lib" / "b.ts"
        a.write_text("import './b';\n", encoding="utf-8")
        b.write_text("import './a';\n", encoding="utf-8")
        paths = [block.path for block in self.graph.walk([(a, "PAGINA RAIZ")])]
        self.assertEqual(paths.count(a), 1)
        self.assertEqual(paths.count(b), 1)

    def test_walk_deduplicates_diamond(self) -> None:
        base = self.root / "src" / "lib" / "base.ts"
        base.write_text("export const B = 1;\n", encoding="utf-8")
        left = self.root / "src" / "lib" / "left.ts"
        left.write_text("import './base';\n", encoding="utf-8")
        right = self.root / "src" / "lib" / "right.ts"
        right.write_text("import './base';\n", encoding="utf-8")
        top = self.root / "src" / "lib" / "top.ts"
        top.write_text("import './left';\nimport './right';\n", encoding="utf-8")
        paths = [block.path for block in self.graph.walk([(top, "PAGINA RAIZ")])]
        self.assertEqual(paths.count(base), 1)

    def test_walk_visits_roots_in_declared_order(self) -> None:
        shell = self.root / "src" / "app" / "layout.tsx"
        shell.parent.mkdir(parents=True, exist_ok=True)
        shell.write_text("export default function L() { return null; }\n", encoding="utf-8")
        page = self.root / "src" / "app" / "page.tsx"
        page.write_text("export default function P() { return null; }\n", encoding="utf-8")
        blocks = self.graph.walk([(shell, "SHELL"), (page, "PAGINA RAIZ")])
        self.assertEqual(blocks[0].path, shell)
        self.assertEqual(blocks[0].role, "SHELL")
        self.assertEqual(blocks[1].path, page)
        self.assertEqual(blocks[1].role, "PAGINA RAIZ")

    def test_walk_depth_first_pre_order(self) -> None:
        a = self.root / "src" / "lib" / "a.ts"
        b = self.root / "src" / "lib" / "b.ts"
        c = self.root / "src" / "lib" / "c.ts"
        a.write_text("import './b';\n", encoding="utf-8")
        b.write_text("import './c';\n", encoding="utf-8")
        c.write_text("export const C = 1;\n", encoding="utf-8")
        paths = [block.path for block in self.graph.walk([(a, "PAGINA RAIZ")])]
        self.assertEqual(paths, [a, b, c])


class TestPathAliases(unittest.TestCase):
    """Lectura de `compilerOptions.paths` desde un tsconfig con comentarios."""

    def test_reads_alias_from_jsonc(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            tsconfig = Path(tmp) / "tsconfig.json"
            tsconfig.write_text(
                '{\n  // comentario\n  "compilerOptions": {\n    "paths": {\n      "@/*": ["./src/*"],\n'
                '      "@generated/*": ["./generated/*"]\n    }\n  }\n}\n',
                encoding="utf-8",
            )
            aliases = load_path_aliases(tsconfig)
        self.assertIn("@/", aliases)
        self.assertIn("@generated/", aliases)

    def test_falls_back_to_defaults_when_missing(self) -> None:
        aliases = load_path_aliases(Path("no-existe/tsconfig.json"))
        self.assertEqual(list(aliases), ["@/"])
        self.assertTrue(str(Path(aliases["@/"])).endswith("src"))

    def test_alias_target_is_absolute(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            tsconfig = Path(tmp) / "tsconfig.json"
            tsconfig.write_text('{"compilerOptions":{"paths":{"@/*":["./src/*"]}}}', encoding="utf-8")
            aliases = load_path_aliases(tsconfig)
        self.assertTrue(Path(aliases["@/"]).is_absolute())
        self.assertTrue(str(Path(aliases["@/"])).endswith("src"))

    def test_strip_json_comments_preserves_urls(self) -> None:
        raw = '{\n  "url": "https://a.com", // x\n  "b": 1\n}'
        self.assertIn("https://a.com", strip_json_comments(raw))


class TestRouteNaming(unittest.TestCase):
    """Aplanado de rutas, route groups y segmentos dinámicos."""

    def setUp(self) -> None:
        self.app = Path("src/app")

    def test_home(self) -> None:
        self.assertEqual(sanitize_file_stem(route_segments(self.app / "page.tsx", self.app)), "home")

    def test_simple_route(self) -> None:
        self.assertEqual(
            sanitize_file_stem(route_segments(self.app / "contacto" / "page.tsx", self.app)),
            "contacto",
        )

    def test_nested_route(self) -> None:
        self.assertEqual(
            sanitize_file_stem(route_segments(self.app / "cotizar" / "express" / "page.tsx", self.app)),
            "cotizar-express",
        )

    def test_route_group_is_dropped(self) -> None:
        self.assertEqual(
            sanitize_file_stem(route_segments(self.app / "(marketing)" / "contacto" / "page.tsx", self.app)),
            "contacto",
        )

    def test_dynamic_segment(self) -> None:
        self.assertEqual(
            sanitize_file_stem(route_segments(self.app / "blog" / "[slug]" / "page.tsx", self.app)),
            "blog-slug",
        )

    def test_catch_all_segment(self) -> None:
        self.assertEqual(
            sanitize_file_stem(route_segments(self.app / "docs" / "[...parts]" / "page.tsx", self.app)),
            "docs-parts",
        )

    def test_optional_catch_all_segment(self) -> None:
        self.assertEqual(
            sanitize_file_stem(route_segments(self.app / "shop" / "[[...path]]" / "page.tsx", self.app)),
            "shop-path",
        )

    def test_no_illegal_windows_chars(self) -> None:
        stem = sanitize_file_stem(route_segments(self.app / "blog" / "[slug]" / "page.tsx", self.app))
        self.assertNotRegex(stem, r'[<>:"/\\|?*\[\]()@]')

    def test_collision_gets_disambiguated_name(self) -> None:
        pages = [
            self.app / "(a)" / "contacto" / "page.tsx",
            self.app / "(b)" / "contacto" / "page.tsx",
        ]
        names = assign_unique_file_names(pages, self.app)
        self.assertEqual(len(set(names.values())), 2)
        self.assertTrue(all("contacto" in name for name in names.values()))

    def test_collision_with_nested_route_groups(self) -> None:
        pages = [
            self.app / "(a)" / "(x)" / "contacto" / "page.tsx",
            self.app / "(b)" / "(y)" / "contacto" / "page.tsx",
        ]
        names = assign_unique_file_names(pages, self.app)
        self.assertEqual(len(set(names.values())), 2)

    def test_no_collision_keeps_flat_names(self) -> None:
        pages = [self.app / "page.tsx", self.app / "contacto" / "page.tsx"]
        names = assign_unique_file_names(pages, self.app)
        self.assertEqual(names[pages[0]], "home.txt")
        self.assertEqual(names[pages[1]], "contacto.txt")


if __name__ == "__main__":
    unittest.main()
