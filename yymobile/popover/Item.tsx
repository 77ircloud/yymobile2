import React from 'react';
import { Popover as _Popover} from 'antd-mobile';

export default class Item extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'yy-popover',
    disabled: false,
  };
  static myName = 'PopoverItem';

  render() {
    return <_Popover.Item {...this.props} />;
  }
}
