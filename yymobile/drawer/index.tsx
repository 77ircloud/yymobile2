import React from 'react';
import { Drawer as _Drawer } from 'antd-mobile';
import tsPropsType from './PropsType';

export default class Drawer extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'yy-drawer',
    enableDragHandle: false,
  };
  render() {
    return <_Drawer {...this.props} />;
  }
}
