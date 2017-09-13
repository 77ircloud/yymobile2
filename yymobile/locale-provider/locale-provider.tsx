import React from 'react';
import { LocaleProvider as _LocaleProvider } from 'antd-mobile';
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
    return <_LocaleProvider {...this.props} />;
  }
}
