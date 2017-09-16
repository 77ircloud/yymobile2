import React from 'react';
import { DatePickerView as DatePickerView_} from 'antd-mobile';
import DatePickerProps from './PropsType';

export default class DatePickerView extends React.Component<DatePickerProps, any> {

  static defaultProps = {
    prefixCls: 'yy-picker',
  };

  render() {
    return <DatePickerView_ {...this.props} />;
  }
}
