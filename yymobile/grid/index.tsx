import React from 'react';
import { Grid as _Grid} from 'antd-mobile';
import GridProps from './PropsType';

export default class Grid extends React.Component<GridProps, any> {

  static defaultProps = {
    prefixCls: 'yy-grid',
  };

  render() {
    return <_Grid {...this.props} />;
  }
}
