import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: true,
      path: '/',
      component: '@/pages/index',
      routes: [{ path: '/umi-app', microApp: 'umi-app' }],
    },
  ],
  fastRefresh: {},
  mfsu: {},
  layout: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'umi-app', // 唯一 id
          entry: '//localhost:7002', // html entry
        },
      ],
    },
  },
});
