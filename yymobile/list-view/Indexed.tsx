import React from 'react';
import { ListView as _ListView} from 'antd-mobile';
import tsPropsType from './PropsType';

export default class MIndexedList extends React.Component<tsPropsType, any> {

  static defaultProps = {
    prefixCls: 'yy-indexed-list',
    listPrefixCls: 'yy-list',
    listViewPrefixCls: 'yy-list-view',
  };

  render() {
    return <_ListView.IndexedList {...this.props} />;
  }
}
