import React from 'react';
import { Picker as Picker_} from 'antd-mobile';
import Props from './PropsType';

function getDefaultProps() {
  const defaultFormat = (values) => {
    return values.join(',');
  };
  return {
    triggerType: 'onClick',
    prefixCls: 'yy-picker',
    pickerPrefixCls: 'yy-picker-col',
    popupPrefixCls: 'yy-picker-popup',
    format: defaultFormat,
    cols: 3,
    cascade: true,
    extra: '请选择',
    okText: '确定',
    dismissText: '取消',
    title: '',
  };
}

export default class Picker extends React.Component<Props, any> {
  static defaultProps = getDefaultProps();

  render() {
    return <Picker_ {...this.props} />;
  }
}
