import React from 'react';
import { NavBar as _NavBar} from 'antd-mobile';
import NavBarProps from './PropsType';

export default class NavBar extends React.Component<NavBarProps, any> {

  static defaultProps = {
    prefixCls: 'yy-navbar'
  };

  render() {
    return <_NavBar {...this.props} />;
  }
}
