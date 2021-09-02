import { UserOutlined, BugOutlined } from '@ant-design/icons';
// import request from './services/request';

const routesRemote = [
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
];

// export const qiankun = request('/apps').then((apps) => ({
export const qiankun = {
  apps: routesRemote,
  lifeCycles: {},
  routes: [
    {
      path: '/blog',
      microApp: 'blog',
      menu: {
        name: '个人博客', // 兼容此写法
        icon: <UserOutlined />,
      },
    },
    {
      path: '/tensorflow',
      microApp: 'tensorflow',
      // microAppProps: {
      //   autoSetLoading: boolean,
      //   className: string,
      //   wrapperClassName: string,
      // },
      menu: {
        name: 'tensorflow', // 兼容此写法
        icon: <BugOutlined />,
      },
    },
  ],
};
