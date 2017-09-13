import React from 'react';
import { Carousel as _Carousel} from 'antd-mobile';
import Props from './PropsType';

export default class Carousel extends React.Component<Props, any> {

  static defaultProps = {
    prefixCls: 'yy-_carousel',
  };

  render() {
    return <_Carousel {...this.props} />;
  }
}
