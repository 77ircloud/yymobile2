/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import ResultProps from './PropsType';
import { Result as Result_ } from 'antd-mobile';

export default class Result extends React.Component<ResultProps, any> {
  static defaultProps = {
    prefixCls: 'yy-result',
    buttonType: '',
    onButtonClick: () => {},
  };

  render() {
    return <Result_ {...this.props} />;
  }
}
