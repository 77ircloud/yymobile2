import React from 'react';
import List from '../list';
import { RadioItemProps } from './PropsType';
import { Radio as Radio_ } from 'antd-mobile';

const ListItem = List.Item;
function noop() { }

export default class RadioItem extends React.Component<RadioItemProps, any> {
  static defaultProps = {
    prefixCls: 'yy-radio',
    listPrefixCls: 'yy-list',
    radioProps: {},
  };

  render() {
    return <Radio_.RadioItem {...this.props} />;
  }
}
