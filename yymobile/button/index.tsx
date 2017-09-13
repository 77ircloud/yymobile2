import React from 'react';
import { Button as _Button} from 'antd-mobile';
import ButtonProps from './PropsType';

export default class Button extends React.Component<ButtonProps, any> {

  static defaultProps = {
    prefixCls: 'yy-button',
  };

  render() {
    return <_Button {...this.props} />;
  }
}
