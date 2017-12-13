import React from 'react';
import {CheckboxProps} from './PropsType';
import {Checkbox as Checkbox_} from 'antd-mobile';

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static CheckboxItem: any;
  static AgreeItem: any;
  static defaultProps = {
    prefixCls: 'yy-checkbox',
    wrapLabel: true,
    multiSelect: false
  };

  render() {
    let {className, multiSelect, ...otherProps} = this.props
    if (multiSelect) {
      className = className + 'yy-checkbox-multi'
    }

    return <Checkbox_ {...otherProps} className={className}/>;
  }
}
