import React from 'react';
import PropTypes from 'prop-types';
import tsPropsType from './PropsType';
import { Calendar as RMCalendar } from 'rmc-calendar';
import { getComponentLocale } from '../_util/getLocale';

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
    const { props, context } = this;
    const locale = getComponentLocale(props, context, 'Calendar', () => require('./locale/zh_CN'));

    return (
      <RMCalendar
        locale={locale}
        {...props}
      />
    );
  }
}
