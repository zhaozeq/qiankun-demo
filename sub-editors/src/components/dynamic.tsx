// @ts-nocheck
import { Spin } from 'antd';
import React, { Component } from 'react';

import Animate from './Animate';

const defaultLoadingComponent = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
    <Spin spinning />
  </div>
);

type Props = {
  component: () => Promise<any>;
};
type State = {
  AsyncComponent: any;
};

/* 路由懒加载 */
export default class Dynamic extends Component<Props, State> {
  LoadingComponent: any;
  mounted: boolean;

  constructor(props) {
    super(props);
    this.LoadingComponent = props.LoadingComponent || defaultLoadingComponent;
    this.state = {
      AsyncComponent: null,
    };
    this.load();
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  load() {
    const { component } = this.props;
    component().then(m => {
      const AsyncComponent = m.default || m;
      if (this.mounted) {
        this.setState({ AsyncComponent });
      }
    });
  }

  render() {
    const { AsyncComponent } = this.state;
    const { LoadingComponent } = this;
    if (AsyncComponent)
      return (
        <Animate component>
          <AsyncComponent {...this.props} />
        </Animate>
      );
    return <LoadingComponent {...this.props} />;
  }
}
