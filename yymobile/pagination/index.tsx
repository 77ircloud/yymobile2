import React from 'react';
import { Pagination as _Pagination} from 'antd-mobile';
import PaginationPropTypes from './PropsType';

export default class Pagination extends React.Component<PaginationPropTypes, any> {

  static defaultProps = {
    prefixCls: 'yy-pagination'
  };

  render() {
    return <_Pagination {...this.props} />;
  }
}
