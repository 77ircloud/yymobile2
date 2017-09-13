import React from 'react';
import { Card as _Card} from 'antd-mobile';
import CardProps from './PropsType';

export default class Card extends React.Component<CardProps, any> {

  static Header = _Card.CardHeader;
  static Body = _Card.CardBody;
  static Footer = _Card.CardFooter;

  static defaultProps = {
    prefixCls: 'yy-card',
  };

  render() {
    return <_Card {...this.props} />;
  }
}
