import React from 'react';
import { TabBarProps, TabBarItemProps } from './PropsType';
import { TabBar as TabBar_ } from "antd-mobile";

export class Item extends React.Component<TabBarItemProps, any> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

class TabBar extends React.Component<TabBarProps, any> {
  static defaultProps = {
    prefixCls: 'yy-tab-bar',
    barTintColor: 'white',
    tintColor: '#108ee9',
    hidden: false,
    unselectedTintColor: '#888',
    placeholder: '正在加载',
  };

  public static Item = Item;

  render() {
    return <TabBar_ {...this.props} />;
  }
}

export default TabBar;
