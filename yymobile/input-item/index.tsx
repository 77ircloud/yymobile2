import React from 'react';
import { InputItem as InputItem_} from 'antd-mobile';
import InputItemProps from './PropsType';

export default class InputItem extends React.Component<InputItemProps, any> {

  static defaultProps = {
    prefixCls: 'yy-input',
  };

  render() {
    return <InputItem_ {...this.props} />;
  }
}
