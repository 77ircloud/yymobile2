import React from 'react';
import WingBlankProps from './PropsType';
import { WingBlank as WingBlank_ } from "antd-mobile";

export default class WingBlank extends React.Component<WingBlankProps, any> {
  static defaultProps = {
    prefixCls: 'yy-wingblank',
    size: 'lg',
  };

  render() {
    return <WingBlank_ {...this.props} />;
  }
}
