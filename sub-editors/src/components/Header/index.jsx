import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { routerConfig } from 'src/App';

export default class Header extends React.Component {
  state = {
    collapsed: false,
    current: window.location.hash.slice(1) || routerConfig[0].path,
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        {routerConfig.map(route => (
          <Menu.Item key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </Menu.Item>
        ))}

        {/* <Menu.SubMenu key={"x"} title={<span className="submenu-title-wrapper">Navigation Three - Submenu</span>}>
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu> */}
        <Menu.Item key="blog">
          <a href="https://blog.csdn.net/qq_36571602" target="_blank" rel="noopener noreferrer">
            我的博客
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
