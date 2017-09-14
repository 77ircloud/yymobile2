import React from 'react';
import SliderProps from './PropsType';
import { Slider as _Slider } from "antd-mobile";

export default class Slider extends React.Component<SliderProps, any> {
  static defaultProps = {
    prefixCls: 'yy-slider',
  };
  render() {
    return <_Slider {...this.props} />;
  }
}
