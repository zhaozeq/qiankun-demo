import { defineConfig } from 'umi';

export default defineConfig({
  alias: { '@/*': 'src/*' },
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  routes: [{ path: '/', component: '@/pages/account/center' }],
  fastRefresh: {},
  // 注册qiankun
  qiankun: {
    slave: {},
  },
});
