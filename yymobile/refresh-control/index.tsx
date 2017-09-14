import React from 'react';
import { Props } from './PropsType';
import { RefreshControl as _RefreshControl } from 'antd-mobile';

export default class RefreshControl extends React.Component<Props, any> {

  static defaultProps = {
    prefixCls: 'yy-refresh-control',
  };

  render() {
    return <_RefreshControl {...this.props} />;
  }
}
