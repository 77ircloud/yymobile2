import React from 'react';
import { Card as Card_} from 'antd-mobile';
import CardProps from './PropsType';

export default class Card extends React.Component<CardProps, any> {

  static Header = Card_.CardHeader;
  static Body = Card_.CardBody;
  static Footer = Card_.CardFooter;

  static defaultProps = {
    prefixCls: 'yy-card',
  };

  render() {
    return <Card_ {...this.props} />;
  }
}
