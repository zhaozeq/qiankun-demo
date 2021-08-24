//@ts-nocheck
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { dynamic } from 'zus';
import App from '@/routes/App';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';

export const routerConfig = [
  {
    name: '基础数据',
    path: '/basic',
    component: () => import('@/routes/Basic'),
  },
  {
    name: '测试中',
    path: '/testing',
    component: () => import('@/routes/Test'),
  },
];

export default ({ app }) => {
  return (
    <Router>
      <App>
        <Switch>
          <Route
            exact
            name="iframe-script-runner"
            path="/iframe"
            component={dynamic({
              app,
              component: () => import('@/routes/Iframe'),
            })}
          />
          {routerConfig.map(({ path, ...dynamics }) => (
            <Route
              key={path}
              exact
              path={path}
              component={dynamic({
                app,
                ...dynamics,
              })}
            />
          ))}
          <Route
            component={dynamic({
              app,
              component: () => Error,
            })}
          />
        </Switch>
      </App>
    </Router>
  );
};

const Error = () => (
  <div className="content-inner">
    <div>
      <h1>路由不匹配！</h1>
    </div>
  </div>
);
