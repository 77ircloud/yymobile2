import React from 'react';
import { Badge as Badge_ } from 'antd-mobile';
import BadgeProps from './PropsType';

export default class Badge extends React.Component<BadgeProps, any> {

  static defaultProps = {
    prefixCls: 'yy-badge',
  };

  render() {
    return <Badge_ {...this.props} />;
  }
}
