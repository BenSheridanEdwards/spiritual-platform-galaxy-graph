import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildGraph } from '../src/buildGraph.ts';
import { getGalaxyGraphCatalog } from '../src/data.ts';
import { example } from './fixtures/graph/example.ts';

test('rejects unresolved test targets', () => {
  const data = example();
  data.tests[0].endpoints = ['svc-b:missing'];
  assert.throws(() => buildGraph(data), /unresolved link target ep:svc-b:missing/);
});

test('namespaces endpoint coverage and keeps node IDs unique', () => {
  const graph = buildGraph(example());
  for (const svc of ['svc-a', 'svc-b']) {
    const node = graph.nodes.find(n => n.id === `ep:${svc}:shared`)!;
    assert.deepEqual(node.tests?.map(t => t.id), [`test:${svc}`]);
  }
  assert.equal(new Set(graph.nodes.map(n => n.id)).size, graph.nodes.length);
});

test('fans out a single topic in producer to consumer direction', () => {
  const graph = buildGraph(example());
  assert.equal(graph.nodes.filter(n => n.kind === 'topic').length, 1);
  assert.deepEqual(graph.links.filter(l => l.kind === 'consumes').map(l => [l.source, l.target]), [['topic:example', 'svc:svc-b'], ['topic:example', 'svc:svc-c']]);
  assert.ok(graph.links.filter(l => l.kind === 'publishes').every(l => l.source === 'svc:svc-a'));
});

test('direct calls use directed bond segments', () => {
  const data = example();
  data.contracts = [{ ...data.contracts[0], mode: 'direct-call' }] as any;
  const graph = buildGraph(data);
  assert.deepEqual(graph.links.filter(l => l.kind === 'depends').map(l => [l.source, l.target]), [['svc:svc-a', 'bond:event-0'], ['bond:event-0', 'svc:svc-b']]);
});

test('rejects duplicate node IDs', () => {
  const data = example();
  data.endpoints.push(data.endpoints[0]);
  assert.throws(() => buildGraph(data), /duplicate node id/);
});

test('default catalog builds with service nodes for every contract party', () => {
  const graph = buildGraph();
  const services = new Set(graph.nodes.filter(n => n.kind === 'service').map(n => n.id));
  for (const contract of getGalaxyGraphCatalog().contracts) {
    assert.ok(services.has(`svc:${contract.producer}`), contract.id);
    assert.ok(services.has(`svc:${contract.consumer}`), contract.id);
  }
  assert.ok(services.has('svc:audit'));
  assert.ok(graph.links.some(l => l.kind === 'publishes' && l.source === 'svc:ledger' && l.target === 'topic:ledger.transaction-recorded'));
  assert.ok(graph.links.some(l => l.kind === 'consumes' && l.source === 'topic:ledger.transaction-recorded' && l.target === 'svc:audit'));
});
