import React from 'react';
import List from '../list';
import {CheckboxItemProps} from './PropsType';
import {Checkbox as Checkbox_} from 'antd-mobile';

const ListItem = List.Item;

function noop() {
}

export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {
  static defaultProps = {
    prefixCls: 'yy-checkbox',
    listPrefixCls: 'yy-list',
    checkboxProps: {},
    multiSelect: false,
  };

  render() {
    let {checkboxProps, multiSelect, ...otherProps} = this.props
    // 将 'yy-checkbox'传入item里面，这里需要特殊处理
    if (!checkboxProps) {
      checkboxProps = {
        prefixCls: 'yy-checkbox',
        className: multiSelect ? 'yy-checkbox-multi' : ''
      }
    }
    checkboxProps.prefixCls = 'yy-checkbox';
    if (multiSelect) checkboxProps.className = 'yy-checkbox-multi';

    return <Checkbox_.CheckboxItem {...otherProps} checkboxProps={checkboxProps}/>;
  }
}
