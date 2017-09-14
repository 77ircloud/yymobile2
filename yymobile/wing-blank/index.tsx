import React from 'react';
import WingBlankProps from './PropsType';
import { WingBlank as _WingBlank } from "antd-mobile";

export default class WingBlank extends React.Component<WingBlankProps, any> {
  static defaultProps = {
    prefixCls: 'yy-wingblank',
    size: 'lg',
  };

  render() {
    return <_WingBlank {...this.props} />;
  }
}
