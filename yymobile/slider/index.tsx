import React from 'react';
import SliderProps from './PropsType';
import { Slider as Slider_ } from "antd-mobile";

export default class Slider extends React.Component<SliderProps, any> {
  static defaultProps = {
    prefixCls: 'yy-slider',
  };
  render() {
    return <Slider_ {...this.props} />;
  }
}
