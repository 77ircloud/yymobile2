import React from 'react';
import classnames from 'classnames';
import List from '../list';
import { CheckboxItemProps } from './PropsType';
import { Checkbox as _Checkbox } from 'antd-mobile';

const ListItem = List.Item;
function noop() { }

export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {
  static defaultProps = {
    prefixCls: 'yy-checkbox',
    listPrefixCls: 'yy-list',
    checkboxProps: {},
  };

  render() {
    return <_Checkbox.CheckboxItem {...this.props} />;
  }
}
