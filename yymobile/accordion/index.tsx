import React from 'react';
import { Panel } from 'rc-collapse';
import { Accordion as Accordion_ } from 'antd-mobile';
import AccordionProps from './PropsType';

export default class Accordion extends React.Component<AccordionProps, any> {
  static Panel = Panel;

  static defaultProps = {
    prefixCls: 'yy-accordion',
  };

  render() {
    return <Accordion_ prefixCls="yy-accordion" {...this.props} />;
  }
}
