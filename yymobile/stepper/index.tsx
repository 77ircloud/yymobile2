import React from 'react';
import StepProps from './PropsType';
import { Stepper as _Stepper } from "antd-mobile";

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
    return <_Stepper {...this.props} />;
  }
}
