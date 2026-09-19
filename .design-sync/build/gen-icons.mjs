import { readFileSync, writeFileSync } from 'node:fs';
const want = `ArrowRight ArrowUpRight BookOpen Calculator Check CheckCircle2 ChevronDown ChevronRight Clock Coffee Croissant Dumbbell Fish Flower2 Leaf MapPin MessageCircle MessageSquare Navigation Package Phone ShieldCheck Shield Shirt Store User Users Wallet Warehouse Zap Truck Mail Landmark HelpCircle Search Heart Sparkles Bike Route Timer Box Building2 Instagram Facebook Star Calendar Receipt CreditCard Loader2 X Menu Plus Minus Info AlertTriangle Navigation2 Map Home Globe`.split(/\s+/);
const barrel = readFileSync('node_modules/lucide-react/dist/esm/lucide-react.js', 'utf8');
const file = {};
for (const m of barrel.matchAll(/export \{([^}]*)\} from '\.\/icons\/([^']+)'/g))
  for (const n of m[1].matchAll(/default as (\w+)/g)) file[n[1]] ??= m[2];
const missing = want.filter((n) => !file[n]);
if (missing.length) console.error('missing', missing);
const lines = [...new Set(want)].filter((n) => file[n]).sort().map((n) => `export { default as ${n}Icon } from 'lucide-react/icons/${file[n].replace(/.js$/, '')}';`);
writeFileSync('.design-sync/build/icons.ts', `// Curated brand icon set (lucide-react ${JSON.parse(readFileSync('node_modules/lucide-react/package.json','utf8')).version}) merged onto window.EnviosDosRuedas as <Name>Icon.
// Deep imports keep esbuild from walking lucide's 1500-icon barrel. Regenerate: node .design-sync/build/gen-icons.mjs
${lines.join('\n')}
`);
console.log(lines.length, 'icons');
