import React from 'react';
import classnames from 'classnames';
import List from '../list';
import { CheckboxItemProps } from './PropsType';
import { Checkbox as Checkbox_ } from 'antd-mobile';

const ListItem = List.Item;
function noop() { }

export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {
  static defaultProps = {
    prefixCls: 'yy-checkbox',
    listPrefixCls: 'yy-list',
    checkboxProps: {},
  };

  render() {
    return <Checkbox_.CheckboxItem {...this.props} />;
  }
}
