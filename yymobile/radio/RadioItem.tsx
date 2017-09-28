import React from 'react';
import { RadioItemProps } from './PropsType';
import { Radio as Radio_ } from 'antd-mobile';

function noop() { }

export default class RadioItem extends React.Component<RadioItemProps, any> {
  static defaultProps = {
    prefixCls: 'yy-radio',
    listPrefixCls: 'yy-list',
    radioProps: {
      prefixCls: 'yy-radio',
    },
  };

  render() {
    const radioProps = {
      prefixCls: 'yy-radio',
    }
    return <Radio_.RadioItem {...this.props} />;
  }
}
