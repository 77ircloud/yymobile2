import React from 'react';
import classnames from 'classnames';
import { CardBodyProps } from './PropsType';
import { Card as Card_} from 'antd-mobile';

export default class CardBody extends React.Component<CardBodyProps, any> {
  static defaultProps = {
    prefixCls: 'yy-card',
  };

  render() {
    return (
      <Card_.Body {...this.props} />
    );
  }
}
