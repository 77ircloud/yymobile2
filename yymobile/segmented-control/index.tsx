import React from 'react';
import { SegmentedControl as SegmentedControl_ } from "antd-mobile";
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
    return <SegmentedControl_ {...this.props} />;
  }
}
