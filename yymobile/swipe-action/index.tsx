import React from 'react';
import SwipeActionProps from './PropsType';
import { SwipeAction as _SwipeAction } from "antd-mobile";

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
    return <_SwipeAction {...this.props} />;
  }
}

export default SwipeAction;
