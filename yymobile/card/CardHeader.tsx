import React from 'react';
import classnames from 'classnames';
import { CardHeaderProps } from './PropsType';
import { Card as Card_} from 'antd-mobile';

export default class CardHeader extends React.Component <CardHeaderProps, any> {
  static defaultProps = {
    prefixCls: 'yy-card',
    thumbStyle: {},
  };

  render() {
    return (
      <Card_.CardHeader {...this.props} />
    );
  }
}
