import React from 'react';
import classnames from 'classnames';
// import CardHeader from './CardHeader';
// import CardBody from './CardBody';
// import CardFooter from './CardFooter';
import { CardProps } from './PropsType';
import { Card as Card_ }  from "antd-mobile";

export default class Card extends React.Component <CardProps, any> {
  static defaultProps = {
    prefixCls: 'yy-card',
    full: false,
  };

  // static Header = CardHeader;
  // static Body = CardBody;
  // static Footer = CardFooter;

  render() {

    return (
      <Card_ {...this.props} />
    );
  }
}
