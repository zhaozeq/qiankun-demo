// import ProLayout, { PageLoading, PageContainer } from '@ant-design/pro-layout';
// import { Avatar } from 'antd';
// import { UserOutlined } from '@ant-design/icons';

// import Footer from '@/components/Footer';

// /** 获取用户信息比较慢的时候会展示一个 loading */
// export const initialStateConfig = {
//   loading: <PageLoading />,
// };

// export default () => {
//   return (
//     <div
//       id="test-pro-layout"
//       style={{
//         height: '100vh',
//       }}
//     >
//       <ProLayout
//         waterMarkProps={{
//           content: 'Pro Layout===========',
//         }}
//         menuFooterRender={() => <Footer />}
//         onMenuHeaderClick={(e) => console.log(e)}
//         rightContentRender={() => (
//           <div>
//             <Avatar shape="square" size="small" icon={<UserOutlined />} />
//           </div>
//         )}
//       >
//         <PageContainer
//           content={'content'}
//           tabList={[
//             {
//               tab: '基本信息',
//               key: 'base',
//             },
//             {
//               tab: '详细信息',
//               key: 'info',
//             },
//           ]}
//         >
//           1
//         </PageContainer>
//       </ProLayout>
//     </div>
//   );
// };
