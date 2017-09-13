import React from 'react';
import { DatePickerView as _DatePickerView} from 'antd-mobile';
import DatePickerProps from './PropsType';

export default class DatePickerView extends React.Component<DatePickerProps, any> {

  static defaultProps = {
    prefixCls: 'yy-picker',
  };

  render() {
    return <_DatePickerView {...this.props} />;
  }
}
