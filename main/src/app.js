import { UserOutlined, BugOutlined } from '@ant-design/icons';
// import request from './services/request';

const routesRemote = [
  {
    name: 'blog',
    entry: 'http://localhost:7002/blog/',
    props: {
      testProp: 'blog',
    },
  },
  {
    name: 'tensorflow',
    entry: 'http://localhost:7003/',
    // to: 'tensorflow',
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
      // autoSetLoading: true,
      // className: 'appClassName',
      // wrapperClassName: 'wrapperClass',
      // loader: (loading) => {
      //   return loading ? <div>runtime loading</div> : null;
      // },
      // },
      menu: {
        name: 'tensorflow', // 兼容此写法
        icon: <BugOutlined />,
      },
    },
  ],
};
