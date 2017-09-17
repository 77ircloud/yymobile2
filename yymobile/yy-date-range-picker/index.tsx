import React from 'react';
import IDatePickerProps from './IDatePickerProps';
import PopupPicker from './Popup';
import { IPopupPickerProps } from 'rmc-picker/lib/PopupPickerTypes';
import DatePicker from './DatePicker';

export interface IPopupDatePickerProps extends IPopupPickerProps {
  datePicker: React.ReactElement<IDatePickerProps>;
  onChange?: (date?) => void;
  date?: any;
}

class YyDateRangePicker extends React.Component<IPopupDatePickerProps, any> {
  static defaultProps = {
    pickerValueProp: 'date',
    pickerValueChangeProp: 'onDateChange',
  };

  static DatePicker = DatePicker;

  onOk = (v) => {
    const { onChange, onOk } = this.props;
    if (onChange) {
      onChange(v);
    }
    if (onOk) {
      onOk(v);
    }
  }

  render() {
    return (<PopupPicker
      picker={this.props.datePicker}
      value={this.props.date}
      {...this.props}
      onOk={this.onOk}
    />);
  }
  // render() {
  //   return (
  //     <div>3333333</div>
  //   )
  // }
}

export default YyDateRangePicker;
