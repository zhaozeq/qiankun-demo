import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Event from './Event';

import styles from './index.less';

interface App {
  history?: any;
  location?: any;
  children?: any;
  search?: any;
}
interface AnimateProps extends App {
  name?: 'fade' | 'fadeL' | 'fadeT' | 'fadeR' | 'fadeB';
  className?: string | object;
  component?: boolean; // 注意：当包裹组件时需要传入true否则无效；当为html元素时可不填
  children: any;
}

type State = {
  style: string;
  animated: boolean;
};

/**
 * Animate 简单的动画组件
 *
 * @export
 * @class CountInput
 * @extends {Component<AnimateProps, State>}
 */
export default class Animate extends Component<AnimateProps, State> {
  static defaultProps = {
    name: 'fade',
    component: false,
  };
  constructor(props: AnimateProps) {
    super(props);
    this.state = {
      style: '',
      animated: false,
    };
  }

  componentDidMount() {
    this.startAnimate();
  }

  componentWillUnmount() {
    const node = ReactDOM.findDOMNode(this);
    Event.support && Event.removeEndEventListener(node, this.done);
  }

  startAnimate = () => {
    const { name } = this.props;
    const node = ReactDOM.findDOMNode(this);
    const style = styles[`saas-${name}in`];
    this.setState({ style, animated: true });
    Event.support && Event.addEndEventListener(node, this.done);
  };

  done = () => {
    this.setState({ style: '', animated: false });
  };

  getClass = () => {
    const { children } = this.props;
    const { animated, style } = this.state;
    const classNames = [children.props.className, style];
    if (animated) classNames.push(styles.animated);
    return classNames.join(' ');
  };

  render() {
    const { children, component, ...rest } = this.props;
    const className = this.getClass();
    const node = React.cloneElement(React.Children.only(children), {
      ...rest,
      className: this.getClass(),
    });
    if (component) {
      // children 为组件传递className无法生效
      return <div className={className}>{node}</div>;
    }
    return node;
  }
}
