import React from 'react';
import { Carousel as Carousel_} from 'antd-mobile';
import Props from './PropsType';

export default class Carousel extends React.Component<Props, any> {

  static defaultProps = {
    prefixCls: 'yy-carousel',
  };

  render() {
    return <Carousel_ {...this.props} />;
  }
}
