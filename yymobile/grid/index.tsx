import React from 'react';
import {Grid as Grid_} from 'antd-mobile';
import {GridProps} from './PropsType';

export default class Grid extends React.Component<GridProps, any> {

  static defaultProps = {
    prefixCls: 'yy-grid',
  };

  render() {
    return <Grid_ {...this.props} />;
  }
}
