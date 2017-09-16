import React from 'react';
import SwipeActionProps from './PropsType';
import { SwipeAction as SwipeAction_ } from "antd-mobile";

class SwipeAction extends React.Component<SwipeActionProps, any> {
  static defaultProps = {
    prefixCls: 'yy-swipe',
    title: '请确认操作',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() {},
    onClose() {},
  };

  render() {
    return <SwipeAction_ {...this.props} />;
  }
}

export default SwipeAction;
