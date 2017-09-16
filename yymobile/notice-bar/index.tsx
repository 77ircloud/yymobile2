import React from 'react';
import { NoticeBar as NoticeBar_} from 'antd-mobile';
import INoticeWebProps from './PropsType';

export default class NoticeBar extends React.Component<INoticeWebProps, any> {

  static defaultProps = {
    prefixCls: 'yy-notice-bar'
  };

  render() {
    return <NoticeBar_ {...this.props} />;
  }
}
