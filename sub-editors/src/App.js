import { lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import Iframe from 'src/routes/Iframe';
import App from 'src/routes/App';
import Dynamic from 'src/components/dynamic';

import 'antd/dist/antd.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';

export const routerConfig = [
  {
    name: '基础数据',
    path: '/basic',
    component: () => import('src/routes/Basic'),
  },
  {
    name: '测试中',
    path: '/testing',
    component: () => import('src/routes/Test'),
  },
];

export default function Main() {
  const base = window.__POWERED_BY_QIANKUN__ ? '/tensorflow' : '/'
  return (
    <Router basename={base}>
      <App>
        <Switch>
          <Route exact name="iframe-script-runner" path="/iframe" component={Iframe} />
          {routerConfig.map(({ path, component }) => (
            <Route key={path} exact path={path} component={props => <Dynamic component={component} {...props} />} />
          ))}
          <Redirect exact from='/' to={routerConfig[0].path} />
        </Switch>
      </App>
    </Router>
  );
}
