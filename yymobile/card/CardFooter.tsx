import React from 'react';
import classnames from 'classnames';
import { CardFooterProps } from './PropsType';
import { Card as Card_} from 'antd-mobile';

export default class CardFooter extends React.Component <CardFooterProps, any> {
  static defaultProps = {
    prefixCls: 'yy-card',
  };

  render() {
    return (
      <Card_.Footer {...this.props} />
    );
  }
}
