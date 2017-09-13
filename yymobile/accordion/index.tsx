import React from 'react';
import { Panel } from 'rc-collapse';
import Accordion from 'antd-mobile';
import AccordionProps from './PropsType';

export default class _Accordion extends React.Component<AccordionProps, any> {
  static Panel = Panel;

  static defaultProps = {
    prefixCls: 'yy-accordion',
  };

  render() {
    return <Accordion prefixCls="yy-accordion" {...this.props} />;
  }
}
