import React from 'react';
import PropTypes from 'prop-types';
import tsPropsType from './PropsType';
import { getComponentLocale } from '../_util/getLocale';
import { Calendar as Calendar_} from "antd-mobile";

export default class Calendar extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'yy-calendar',
    timePickerPrefixCls: 'yy-picker',
    timePickerPickerPrefixCls: 'yy-picker-col',
  } as tsPropsType;

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  render() {

    return (
      <Calendar_ {...this.props} />
    );
  }
}
