import React from 'react';
import { RadioProps } from './PropsType';
import { Radio as Radio_ } from 'antd-mobile';

export default class Radio extends React.Component<RadioProps, any> {

  static defaultProps = {
    prefixCls: 'yy-radio',
    wrapLabel: true,
  };

  render() {
    return <Radio_ {...this.props} />;
  }
}
