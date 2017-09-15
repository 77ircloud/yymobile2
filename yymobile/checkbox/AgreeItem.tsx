import React from 'react';
import classnames from 'classnames';
import { AgreeItemPropsType } from './PropsType';
import getDataAttr from '../_util/getDataAttr';
import { Checkbox as _Checkbox } from 'antd-mobile';

export default class AgreeItem extends React.Component<AgreeItemPropsType, any> {
  static defaultProps = {
    prefixCls: 'yy-checkbox',
  };

  render() {
    return <_Checkbox.AgreeItem {...this.props} />;
  }
}
