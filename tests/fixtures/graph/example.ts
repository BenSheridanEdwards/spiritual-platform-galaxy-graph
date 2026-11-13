// Synthetic examples; mutation counts are fixture data, not a fresh mutation run.
export function example() {
  return {
    services: ['svc-a', 'svc-b', 'svc-c'].map(svc => ({ id: `svc:${svc}`, svc, file: 'example' })),
    endpoints: ['svc-a', 'svc-b'].map(svc => ({ id: `ep:${svc}:shared`, svc, fnName: 'shared', noun: 'shared', method: 'GET', path: '/' })),
    tests: ['svc-a', 'svc-b'].map(svc => ({ id: `test:${svc}`, svc, name: svc, endpoints: [`${svc}:shared`] })),
    contracts: ['svc-b', 'svc-c'].map((consumer, i) => ({ id: `event-${i}`, producer: 'svc-a', consumer, mode: 'event-bus' as const, topic: 'example', file: 'example', describe: 'example', producerFns: [], consumerFns: [], tests: [] })),
    topics: [], mutation: { services: {}, endpoints: {} },
  };
}
