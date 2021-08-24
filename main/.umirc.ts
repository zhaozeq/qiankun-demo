import { defineConfig } from 'umi';

export default defineConfig({
  proxy: {
    '/api/blog': {
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
    name: '个人网站',
    logo: '/images/favicon-32x32-next.png',
    locale: true,
    // target: '_blank',
    // headerRender: false,
    // // 不展示页脚
    // footerRender: false,
    // 不展示菜单
    // menuRender: false,
    // 不展示菜单顶栏
    // menuHeaderRender: () => {},
    // // 隐藏子菜单
    // hideChildrenInMenu: true,
    // // 隐藏自己和子菜单
    // hideInMenu: true,
    // // 在面包屑中隐藏
    // hideInBreadcrumb: true,
    // 子项往上提，仍旧展示,
    // flatMenu: true,
    // layout: 'side',
  },
});