import React from 'react';
import { List as List_} from 'antd-mobile';
import ListProps from './PropsType';
import Item from './ListItem';

export default class List extends React.Component<ListProps, any> {
  static Item = Item;

  static defaultProps = {
    prefixCls: 'yy-list',
  };

  render() {
    return <List_ {...this.props} />;
  }
}
