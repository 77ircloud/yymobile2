import React from 'react';
import { Button as Button_ } from 'antd-mobile';
import ButtonProps from './PropsType';

export default class Button extends React.Component<ButtonProps, any> {

  static defaultProps = {
    prefixCls: 'yy-button',
  };

  render() {
    return <Button_ {...this.props} />;
  }
}
