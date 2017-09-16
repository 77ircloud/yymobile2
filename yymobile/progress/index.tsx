import React from 'react';
import { Progress as Progress_} from 'antd-mobile';
import ProgressProps from './PropsType';

export default class Progress extends React.Component<ProgressProps, any> {
  static defaultProps = {
    prefixCls: 'yy-progress',
    percent: 0,
    position: 'fixed',
    unfilled: true,
    appearTransition: false,
  };

  render() {
    return <div>45555</div>;
  }
}
