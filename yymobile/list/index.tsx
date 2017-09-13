import React from 'react';
import { List as _List} from 'antd-mobile';
import ListProps from './PropsType';

export default class List extends React.Component<ListProps, any> {

  static defaultProps = {
    prefixCls: 'yy-list',
  };

  render() {
    return <_List {...this.props} />;
  }
}
