import React from 'react';
import {Flex as Flex_} from 'antd-mobile';
import {FlexProps} from './PropsType';

export default class Flex extends React.Component<FlexProps, any> {
  static Item: any;
  static defaultProps = {
    prefixCls: 'yy-flexbox',
  };

  render() {
    return <Flex_ {...this.props} />;
  }
}
