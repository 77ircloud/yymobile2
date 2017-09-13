import React from 'react';
import { Flex as _Flex} from 'antd-mobile';
import FlexProps from './PropsType';

export default class Flex extends React.Component<FlexProps, any> {

  static defaultProps = {
    prefixCls: 'yy-flexbox',
  };

  render() {
    return <_Flex {...this.props} />;
  }
}
