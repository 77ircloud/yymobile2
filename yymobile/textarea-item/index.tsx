/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import TextareaItemProps from './PropsType';
import { TextareaItem as TextareaItem_ } from "antd-mobile";

function noop() {}

export interface TextareaItemState {
  focus?: boolean;
}

export default class TextareaItem extends React.Component<TextareaItemProps, TextareaItemState> {
  static defaultProps = {
    prefixCls: 'yy-textarea',
    prefixListCls: 'yy-list',
    autoHeight: false,
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    rows: 1,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onErrorClick: noop,
    error: false,
    labelNumber: 5,
  };

  render() {
    return <TextareaItem {...this.props} />;
  }
}
