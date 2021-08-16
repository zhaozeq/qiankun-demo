export default {
  'GET /api/apps': [
    {
      name: 'blog',
      entry: 'http://localhost:7002/blog',
      to: '/blog',
      props: {
        testProp1: 'blog',
      },
    },
  ],
};
