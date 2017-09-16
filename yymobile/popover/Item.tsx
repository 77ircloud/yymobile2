import React from 'react';
import { Popover as Popover_} from 'antd-mobile';

export default class Item extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'yy-popover',
    disabled: false,
  };
  static myName = 'PopoverItem';

  render() {
    return <Popover_.Item {...this.props} />;
  }
}
