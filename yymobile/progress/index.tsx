import React from 'react';
import classnames from 'classnames';
import ProgressProps from './PropsType';
import { Progress as Progress_ } from "antd-mobile";

export default class Progress extends React.Component<ProgressProps, any> {
  static defaultProps = {
    prefixCls: 'yy-progress',
    percent: 0,
    position: 'fixed',
    unfilled: true,
    appearTransition: false,
  };

  render() {

    return (
      <Progress_ {...this.props} />
    );
  }
}
