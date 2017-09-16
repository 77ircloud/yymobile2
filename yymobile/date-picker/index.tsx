import React from 'react';
import { DatePicker as DatePicker_} from 'antd-mobile';
import DatePickerProps from './PropsType';

export default class DatePicker extends React.Component<DatePickerProps, any> {

  static defaultProps = {
    prefixCls: 'yy-picker',
    pickerPrefixCls: 'yy-picker-col',
    popupPrefixCls: 'yy-picker-popup',
  };

  render() {
    return <DatePicker_ {...this.props} />;
  }
}
