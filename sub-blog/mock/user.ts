// eslint-disable-next-line import/no-extraneous-dependencies
import type { Request, Response } from 'express';
import type { ListItemDataType } from '@/pages/account/center/data';

const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  '那是一种内在的东西， 他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '生命就像一盒巧克力，结果往往出人意料',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么',
];

const user = ['付小小', '曲丽丽', '林东东', '周星星', '吴加好', '朱偏右', '鱼酱', '乐哥', '谭小仪', '仲尼'];

// 当前用户信息
const currentUseDetail = {
  name: '赵泽清🇨🇳',
  avatar: '/images/avatar.jpg',
  profession: '工程技术·IoT技术·前端',
  userid: '00000001',
  email: 'zhaozeq@foxmail.com',
  gitHub: 'https://github.com/zhaozeq',
  CSDN: 'https://blog.csdn.net/qq_36571602',
  tags: [
    'react',
    'vue',
    'git',
    'webpack',
    'npm',
    'TypeScript',
    'redux',
    'mysql',
    'MongoDB',
    'Sass',
    'Prettier',
    'Html5',
    'egg',
  ],
  notice: [
    {
      id: 'xxx1',
      logo: avatars[0],
      member: 'md文件解析器',
      description: 'markdown 文件在线预览，导出等',
      updatedAt: new Date(),
      href: '//a',
      memberLink: '',
    },
    {
      id: 'xxx2',
      logo: avatars[1],
      member: 'vue-to-react',
      description: 'vue-to-react-tool 将.vue文件转换成.jsx文件',
      updatedAt: new Date('2017-07-24'),
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx3',
      logo: avatars[2],
      member: 'TF 代码调试',
      description: '在线调试 TensorFlow.js 代码',
      updatedAt: new Date(),
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx4',
      logo: avatars[3],
      member: '暂无数据',
      description: '那时候我只会想自己想要什么，从不想自己拥有什么',
      updatedAt: new Date('2017-07-23'),
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx5',
      logo: avatars[4],
      member: '暂无数据',
      description: '凛冬将至',
      updatedAt: new Date('2017-07-23'),
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx6',
      logo: avatars[5],
      member: '排版好看点',
      description: '生命就像一盒巧克力，结果往往出人意料',
      updatedAt: new Date('2017-07-23'),
      href: '',
      memberLink: '',
    },
  ],
  country: 'China',
  geographic: {
    province: {
      label: '浙江省',
      key: '330000',
    },
    city: {
      label: '绍兴市',
      key: '312032',
    },
  },
};

function fakeList(count: number): ListItemDataType[] {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],

      avatar: avatars[i % 8],
      cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3] as 'normal' | 'exception' | 'active' | 'success',
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      subDescription: desc[i % 5],
      description:
        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: '曲丽丽',
          id: 'member1',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: '王昭君',
          id: 'member2',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: '董娜娜',
          id: 'member3',
        },
      ],
    });
  }

  return list;
}

function getFakeList(req: Request, res: Response) {
  const params = req.query as any;

  const count = Number(params.count) * 1 || 5;

  const result = fakeList(count);
  return res.json({
    code: 0,
    data: {
      list: result,
    },
  });
}

// 获取用户信息
function getCurrentUser(req: Request, res: Response) {
  return res.json({
    code: 0,
    data: currentUseDetail,
  });
}

export default {
  'GET  /api/blog/fake_list_Detail': getFakeList,
  // 支持值为 Object 和 Array
  'GET  /api/blog/userInfo': getCurrentUser,
};
