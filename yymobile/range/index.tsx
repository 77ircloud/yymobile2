import React from 'react';
import RcRange from 'rc-slider/lib/Range';
import RangeProps from './PropsType';
import { Range as Range_ } from 'antd-mobile';

export default class Range extends React.Component<RangeProps, any> {
  static defaultProps = {
    prefixCls: 'yy-slider',
  };

  render() {
    return <Range_ {...this.props} />;
  }
}
