import React from 'react';
import WhiteSpaceProps from './PropsType';
import { WhiteSpace as WhiteSpace_ } from "antd-mobile";

export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
  static defaultProps = {
    prefixCls: 'yy-whitespace',
    size: 'md',
  };

  render() {
    return <WhiteSpace_ {...this.props} />;
  }
}
