export default {
  'GET /api/apps': [
    {
      name: 'app1',
      entry: 'http://localhost:7002/app1',
      to: '/app1',
      props: {
        testProp1: 'app1',
      },
    },
  ],
};
