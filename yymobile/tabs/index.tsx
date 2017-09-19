import React from 'react';
import { Tabs as RMCTabs, DefaultTabBar as RMCDefaultTabBar, TabBarPropsType } from 'rmc-tabs';
import { Tabs as Tabs_ } from "antd-mobile";
import TabsProps from './PropsType';

export class DefaultTabBar extends React.PureComponent<any, any> {
  static defaultProps = {
    prefixCls: 'yy-tabs-default-bar',
  }

  render() {
    return <Tabs_.DefaultTabBar {...this.props} prefixCls="yy-tabs-default-bar" />;
  }
}

export default class Tabs extends React.PureComponent<TabsProps, {}> {
  public static DefaultTabBar = DefaultTabBar;

  static defaultProps = {
    prefixCls: 'yy-tabs',
  };

  render() {
    return <Tabs_ {...this.props} />;
  }
}
