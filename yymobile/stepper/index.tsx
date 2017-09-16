import React from 'react';
import StepProps from './PropsType';
import { Stepper as Stepper_ } from "antd-mobile";

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps = {
    prefixCls: 'yy-stepper',
    step: 1,
    readOnly: false,
    showNumber: false,
    focusOnUpDown: false,
    useTouch: true,
  };

  stepperRef: any;

  render() {
    return <Stepper_ {...this.props} />;
  }
}
