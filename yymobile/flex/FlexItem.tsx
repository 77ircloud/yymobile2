import React from 'react';
import { Flex as _Flex} from 'antd-mobile';
import FlexItemProps from './PropsType';

export default class FlexItem extends React.Component<FlexItemProps, any> {

  static defaultProps = {
    prefixCls: 'yy-flexbox',
  };

  render() {
    return <_Flex.FlexItem {...this.props} />;
  }
}
