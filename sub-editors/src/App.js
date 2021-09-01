import { lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import Iframe from 'src/routes/Iframe';
import App from 'src/routes/App';
import Dynamic from 'src/components/dynamic';

import 'antd/dist/antd.css'
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
  return (
    <Router>
      <App>
        <Switch>
          <Route exact name="iframe-script-runner" path="/iframe" component={Iframe} />
          {routerConfig.map(({ path, component }) => (
            <Route key={path} exact path={path} component={props => <Dynamic component={component} {...props} />} />
          ))}
          <Route component={Error} />
        </Switch>
      </App>
    </Router>
  );
}

const Error = () => (
  <div className="content-inner">
    <div>
      <h1>路由不匹配！</h1>
    </div>
  </div>
);
