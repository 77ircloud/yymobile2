import React from 'react';
import IDatePickerProps from './IDatePickerProps';
import PopupPicker from './Popup';
import { IPopupPickerProps } from './PopupPickerTypes';
import DatePickere from "./DatePicker";

let now = new Date();

export interface IPopupDatePickerProps extends IPopupPickerProps {
  datePicker: React.ReactElement<IDatePickerProps>;
  onChange?: (date?) => void;
  date?: any;
  pickerPrefixCls?: string;
  rootNativeProps?: {};
  defaultDate?: any;
  minDate?: any;
  maxDate?: any;
  mode?: string;
  disabled?: boolean;
  locale?: any;
  onDateChange?: (date: any) => void;
}

class YyDateRangePicker extends React.Component<IPopupDatePickerProps, any> {
  static defaultProps = {
    pickerValueProp: 'date',
    pickerValueChangeProp: 'onDateChange',
  };

  onOk = (startTime, endTime) => {
    const { onOk } = this.props;
    if (onOk) {
      const okRes = onOk(startTime, endTime);
      if (okRes || okRes === undefined) {
        return true;
      } else {
        return false;
      }
    }
  }

  render() {
    const { minDate, maxDate, mode, locale, onDateChange, defaultDate, startDate, endDate} = this.props;
    const datePicker = (
      <DatePickere
        rootNativeProps={{'data-xx': 'yy'}}
        minDate={minDate}
        maxDate={maxDate}
        defaultDate={startDate || now}
        mode={"date"}
        locale={locale}
        onDateChange={onDateChange}
      />
    )
    return (<PopupPicker
      picker={datePicker}
      value={startDate || now}
      startDate={startDate || now}
      endDate={endDate || now}
      {...this.props}
      onOk={this.onOk}
    />);
  }
}

export default YyDateRangePicker;
