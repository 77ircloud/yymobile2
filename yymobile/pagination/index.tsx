import React from 'react';
import { Pagination as Pagination_} from 'antd-mobile';
import PaginationPropTypes from './PropsType';

export default class Pagination extends React.Component<PaginationPropTypes, any> {

  static defaultProps = {
    prefixCls: 'yy-pagination'
  };

  render() {
    return <Pagination_ {...this.props} />;
  }
}
