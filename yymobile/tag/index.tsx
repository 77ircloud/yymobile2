import React from 'react';
import TagProps from './PropsType';
import { Tabs as _Tabs } from "antd-mobile";

export default class Tag extends React.Component<TagProps, any> {
  static defaultProps = {
    prefixCls: 'yy-tag',
    disabled: false,
    selected: false,
    closable: false,
    small: false,
    onChange() {},
    onClose() {},
    afterClose() {},
  };

  render() {
    return <_Tabs {...this.props} />;
  }
}
