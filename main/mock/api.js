export default {
  'GET /api/apps': [
    {
      name: 'blog',
      entry: 'http://localhost:7002',
      to: '/blog',
      props: {
        testProp: 'blog',
      },
    },
    {
      name: 'tensorflow',
      entry: 'http://localhost:7003',
      to: '/tensorflow',
      props: {
        testProp: 'tensorflow',
      },
    },
  ],
};
