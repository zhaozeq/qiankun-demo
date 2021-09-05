export default {
  'GET /api/apps': [
    {
      name: 'blog',
      entry: 'http://localhost:7002/blog',
      to: '/blog',
      props: {
        testProp: 'blog',
      },
    },
    {
      name: 'tensorflow',
      entry: 'http://localhost:7003/tensorflow',
      to: '/tensorflow',
      props: {
        testProp: 'tensorflow',
      },
    },
  ],
};
