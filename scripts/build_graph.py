import os, sys, json
from pathlib import Path
from graphify.detect import detect
from graphify.extract import collect_files, extract
from graphify.build import build_from_json
from graphify.cluster import cluster, score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate
from graphify.export import to_json

os.makedirs('graphify-out', exist_ok=True)
input_path = Path('src').resolve()
detection = detect(input_path)
Path('graphify-out/.graphify_detect.json').write_text(json.dumps(detection, ensure_ascii=False), encoding='utf-8')
print(f"Detected {detection['total_files']} files.")

code_files = []
for f in detection.get('files', {}).get('code', []):
    p = Path(f)
    code_files.extend(collect_files(p) if p.is_dir() else [p])

ast_result = extract(code_files, cache_root=input_path, root=input_path) if code_files else {'nodes':[], 'edges':[], 'input_tokens':0, 'output_tokens':0}
Path('graphify-out/.graphify_ast.json').write_text(json.dumps(ast_result, indent=2, ensure_ascii=False), encoding='utf-8')

semantic_result = {'nodes':[], 'edges':[], 'hyperedges':[], 'input_tokens':0, 'output_tokens':0}
Path('graphify-out/.graphify_semantic.json').write_text(json.dumps(semantic_result, ensure_ascii=False), encoding='utf-8')

extraction = {
    'nodes': ast_result['nodes'] + semantic_result['nodes'],
    'edges': ast_result['edges'] + semantic_result['edges'],
    'hyperedges': semantic_result.get('hyperedges', []),
    'input_tokens': 0,
    'output_tokens': 0,
}
Path('graphify-out/.graphify_extract.json').write_text(json.dumps(extraction, indent=2, ensure_ascii=False), encoding='utf-8')

G = build_from_json(extraction, root=input_path, directed=False)
communities = cluster(G)
cohesion = score_all(G, communities)
gods = god_nodes(G)
surprises = surprising_connections(G, communities)
labels = {cid: f'Community {cid}' for cid in communities}
questions = suggest_questions(G, communities, labels)

to_json(G, communities, 'graphify-out/graph.json', community_labels=labels)
report = generate(G, communities, cohesion, labels, gods, surprises, detection, {'input':0, 'output':0}, input_path, suggested_questions=questions)
Path('graphify-out/GRAPH_REPORT.md').write_text(report, encoding='utf-8')
print(f'Graph built successfully: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges, {len(communities)} communities.')
