import React from 'react';
import { Icon as Icon_ } from 'antd-mobile';
import GridProps from './PropsType';

export interface IconPropType {
  type: string;
  className?: string;
  style?: React.CSSProperties;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  onClick?: (e?: any) => void;
}

export default class Icon extends React.Component<IconPropType, any> {

  static defaultProps = {
    size: 'md',
  };

  render() {
    return <Icon_ {...this.props} />;
  }
}
