import React from 'react';
import { NoticeBar as _NoticeBar} from 'antd-mobile';
import INoticeWebProps from './PropsType';

export default class NoticeBar extends React.Component<INoticeWebProps, any> {

  static defaultProps = {
    prefixCls: 'yy-notice-bar'
  };

  render() {
    return <_NoticeBar {...this.props} />;
  }
}
