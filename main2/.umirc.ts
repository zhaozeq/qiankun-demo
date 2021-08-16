import { defineConfig } from 'umi';

export default defineConfig({
  proxy: {
    '/api/app1': {
      target: 'http://localhost:7002',
      changeOrigin: true,
    },
    '/api/app2': {
      target: 'http://localhost:8002',
      changeOrigin: true,
    },
    '/api/app3': {
      target: 'http://localhost:8003',
      changeOrigin: true,
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      exact: true,
      component: '@/pages/index',
    },
  ],
  // mfsu: {},
  fastRefresh: {},
  qiankun: {
    master: {},
  },
});
