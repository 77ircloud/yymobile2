import React from 'react';
import { Popover as Popover_} from 'antd-mobile';
import Item from './Item';
import tsPropsType from './PropsType';

export default class Popover extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'yy-popover',
    placement: 'bottomRight',
    align: { overflow: { adjustY: 0, adjustX: 0 } },
    trigger: ['click'],
  };
  static Item = Item;

  render() {
    return <Popover_ {...this.props} />;
  }
}
