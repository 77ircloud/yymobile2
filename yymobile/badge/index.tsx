import React from 'react';
import { Badge as _Badge } from 'antd-mobile';
import BadgeProps from './PropsType';

export default class Badge extends React.Component<BadgeProps, any> {

  static defaultProps = {
    prefixCls: 'yy-badge',
  };

  render() {
    return <_Badge {...this.props} />;
  }
}
