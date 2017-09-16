import React from 'react';
import { ActivityIndicator as ActivityIndicator_} from 'antd-mobile';
import ActivityIndicatorPropTypes from './PropsType';

export default class ActivityIndicator extends React.Component<ActivityIndicatorPropTypes, any> {

  static defaultProps = {
    prefixCls: 'yy-activity-indicator',
  };

  render() {
    return <ActivityIndicator_ {...this.props} />;
  }
}
