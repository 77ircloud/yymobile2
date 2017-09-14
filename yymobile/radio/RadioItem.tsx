import React from 'react';
import List from '../list';
import { RadioItemProps } from './PropsType';
import { Radio as _Radio } from 'antd-mobile';

const ListItem = List.Item;
function noop() { }

export default class RadioItem extends React.Component<RadioItemProps, any> {
  static defaultProps = {
    prefixCls: 'yy-radio',
    listPrefixCls: 'yy-list',
    radioProps: {},
  };

  render() {
    return <_Radio.RadioItem {...this.props} />;
  }
}
