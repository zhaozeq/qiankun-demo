import { defineConfig } from 'umi';
import path from 'path';

export default defineConfig({
  favicon: '/images/favicon-32x32-next.ico',
  outputPath: '../dist/',
  proxy: {
    '/api/blog': {
      target: 'http://localhost:7002',
      changeOrigin: true,
    },
    '/api/tensorflow': {
      target: 'http://localhost:7003',
      changeOrigin: true,
    },
    '/api/app3': {
      target: 'http://localhost:7004',
      changeOrigin: true,
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '*',
      redirect: '/blog',
    },
  ],
  mfsu: { mfName: 'mfMain' },
  fastRefresh: {},
  qiankun: {
    master: {},
  },
  layout: {
    name: 'Welcome',
    logo: '/images/favicon-32x32-next.ico',
    locale: true,
    siderWidth: 200,
    // 不展示菜单顶栏
    // menuHeaderRender: false,
    // target: '_blank',
    headerRender: false,
    // // 不展示页脚
    // footerRender: false,
    // 不展示菜单
    // menuRender: false,
    // // 隐藏子菜单
    // hideChildrenInMenu: true,
    // // 隐藏自己和子菜单
    // hideInMenu: true,
    // // 在面包屑中隐藏
    // hideInBreadcrumb: true,
    // 子项往上提，仍旧展示,
    // flatMenu: true,
    layout: 'side',
  },
});
