import React from 'react';
import TagProps from './PropsType';
import { Tag as Tag_ } from "antd-mobile";

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
    return <Tag_ {...this.props} />;
  }
}
