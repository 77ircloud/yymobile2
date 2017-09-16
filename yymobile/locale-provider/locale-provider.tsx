import React from 'react';
import { LocaleProvider as LocaleProvider_ } from 'antd-mobile';
import PropTypes from 'prop-types';

export interface LocaleProviderProps {
  locale: {
    Pagination?: Object,
    DatePicker?: Object,
    DatePickerView?: Object,
    InputItem?: Object,
  };
  children?: React.ReactElement<any>;
}

export default class LocaleProvider extends React.Component<LocaleProviderProps, any> {
  static propTypes = {
    locale: PropTypes.object,
  };

  render() {
    return <LocaleProvider_ {...this.props} />;
  }
}
