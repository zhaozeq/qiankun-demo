import { defineConfig } from 'umi';
import { name } from './package.json';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  base: `/self`,
  publicPath: isDev ? '/' : `/${name}/`,
  outputPath: `../build/${name}`,
  alias: { '@/*': 'src/*' },
  nodeModulesTransform: {
    type: 'none',
  },
  devtool: isDev ? 'cheap-module-source-map' : false,
  mfsu: { mfName: name },
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
