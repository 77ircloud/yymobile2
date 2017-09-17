import React from 'react';
import RcCheckbox from 'rc-checkbox';
import { CheckboxProps } from './PropsType';
import classnames from 'classnames';
import { Checkbox as Checkbox_ } from 'antd-mobile';

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static CheckboxItem: any;
  static AgreeItem: any;
  static defaultProps = {
    prefixCls: 'yy-checkbox',
    wrapLabel: true,
    multiSelect: false
  };

  render() {
    let { prefixCls, className, multiSelect } = this.props
    if (multiSelect) {
      className = className + 'yy-checkbox-multi'
    }

    return <Checkbox_ {...this.props} className={className} />;
  }
}
