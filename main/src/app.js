import { UserOutlined, BugOutlined } from '@ant-design/icons';
import request from './services/request';

export const qiankun = request('/apps').then((apps) => ({
  apps,
  lifeCycles: {
    // afterMount: (props) => {
    //   console.log('afterMount', props);
    // },
  },
  routes: [
    {
      path: '/blog',
      microApp: 'blog',
      // microAppProps: {
      //   autoSetLoading: true,
      // },
      menu: {
        name: '个人博客', // 兼容此写法
        icon: <UserOutlined />,
      },
    },
    {
      path: '/tensorflow',
      microApp: 'tensorflow',
      menu: {
        name: 'tensorflow', // 兼容此写法
        icon: <BugOutlined />,
      },
    },
  ],
}));
