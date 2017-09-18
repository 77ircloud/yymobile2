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

  onOk = (startTime, endTime) => {
    const { onOk } = this.props;
    if (onOk) {
      onOk(startTime, endTime);
    }
  }

  render() {
    console.log('PopupPicker')
    return (<PopupPicker
      picker={this.props.datePicker}
      value={this.props.date}
      {...this.props}
      onOk={this.onOk}
    />);
  }
}

export default YyDateRangePicker;
