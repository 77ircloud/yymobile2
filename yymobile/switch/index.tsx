import React from 'react';
import SwitchProps from './PropsType';
import { Switch as Switch_ } from "antd-mobile";

export default class Switch extends React.Component<SwitchProps, any> {
  static defaultProps = {
    prefixCls: 'yy-switch',
    name: '',
    checked: false,
    disabled: false,
    onChange() {},
    platform: 'ios',
    onClick() {},
  };

  render() {
    return <Switch_ {...this.props} />;
  }
}
