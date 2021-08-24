export default {
  'GET /api/apps': [
    {
      name: 'blog',
      entry: 'http://localhost:7002',
      to: '/blog',
      props: {
        testProp1: 'blog',
      },
    },
  ],
};
