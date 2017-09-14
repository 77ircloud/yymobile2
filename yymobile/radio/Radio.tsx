import React from 'react';
import { RadioProps } from './PropsType';
import { Radio as _Radio } from 'antd-mobile';

export default class Radio extends React.Component<RadioProps, any> {
  static RadioItem: any;

  static defaultProps = {
    prefixCls: 'yy-radio',
    wrapLabel: true,
  };

  render() {
    return <_Radio {...this.props} />;
  }
}
