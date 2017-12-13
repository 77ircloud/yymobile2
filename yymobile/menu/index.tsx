import React from 'react';
import { Menu as Menu_} from 'antd-mobile';
import {MenuProps} from './PropsType';

export default class Menu extends React.Component<MenuProps, any> {

  static defaultProps = {
    prefixCls: 'yy-menu'
  };

  render() {
    return <Menu_ {...this.props} />;
  }
}
