import React from 'react';
import RcSteps from 'rc-steps';
import { Steps as _Steps } from "antd-mobile";

export interface StepsProps {
  prefixCls?: string;
  iconPrefix?: string;
  direction?: string;
  labelPlacement?: string;
  children: any;
  status?: string;
  size?: string;
  current?: number;
}

export default class Steps extends React.Component<StepsProps, any> {
  static Step = (RcSteps as any).Step;

  static defaultProps = {
    prefixCls: 'yy-steps',
    iconPrefix: 'ant',
    labelPlacement: 'vertical',
    direction: 'vertical',
    current: 0,
  };
  stepRefs: any;
  stepsRef: any;

  render() {
    return <_Steps {...this.props} />;
  }
}
