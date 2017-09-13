import React from 'react';
import { ActivityIndicator as _ActivityIndicator} from 'antd-mobile';
import ActivityIndicatorPropTypes from './PropsType';

export default class ActivityIndicator extends React.Component<ActivityIndicatorPropTypes, any> {

  static defaultProps = {
    prefixCls: 'yy-activity-indicator',
  };

  render() {
    return <_ActivityIndicator {...this.props} />;
  }
}
