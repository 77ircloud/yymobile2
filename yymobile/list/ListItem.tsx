import React from 'react';
import { List as _List} from 'antd-mobile';
import ListItemProps from './PropsType';

export default class ListItem extends React.Component<ListItemProps, any> {

  static defaultProps = {
    prefixCls: 'yy-list',
  };

  render() {
    return <_List.Item {...this.props} />;
  }
}
