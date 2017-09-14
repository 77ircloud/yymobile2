import React from 'react';
import { PickerView as _PickerView} from 'antd-mobile';
import Props from './PropsType';

export interface IPickerView {
  prefixCls?: string;
  pickerPrefixCls?: string;
  cols?: number;
  cascade?: boolean;
  value?: any[];
  data?: any;
  styles?: any;
  onChange?: (value?) => void;
  indicatorStyle?: any;
}

export default class PickerView extends React.Component<IPickerView, any> {

  render() {
    return <_PickerView {...this.props} />;
  }
}
