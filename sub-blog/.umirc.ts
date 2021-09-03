import { defineConfig } from 'umi';

const BASE = '/blog';

export default defineConfig({
  base: BASE,
  publicPath: BASE + '/',
  outputPath: '../build' + BASE,
  alias: { '@/*': 'src/*' },
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: '@/pages/account/center' },
  ],
  fastRefresh: {},
  // 注册qiankun
  qiankun: {
    slave: {},
  },
});
