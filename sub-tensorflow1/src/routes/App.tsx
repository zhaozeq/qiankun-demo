// @ts-nocheck
import React from 'react';
import { connect } from 'zus';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Header from '@/components/Header';
import Iframe from './Iframe';

/* 公共节点 可以在这里处理登录、主题等 */
class App extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ConfigProvider locale={zhCN}>
        <Header />
        {children}
        {/* <Footer /> */}
        <Iframe />
      </ConfigProvider>
    );
  }
}

export default App;
