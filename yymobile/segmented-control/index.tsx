import React from 'react';
import { SegmentedControl as _SegmentedControl } from "antd-mobile";
import SegmentedControlProps from './PropsType';

export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
  static defaultProps = {
    prefixCls: 'yy-segment',
    selectedIndex: 0,
    disabled: false,
    values: [],
    onChange() {},
    onValueChange() {},
    style: {},
    tintColor: '',
  };

  render() {
    return <_SegmentedControl {...this.props} />;
  }
}
