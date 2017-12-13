import React from 'react';
import {ImagePicker as ImagePicker_} from 'antd-mobile';
import {ImagePickerPropTypes} from './PropsType';

export default class ImagePicker extends React.Component<ImagePickerPropTypes, any> {

  static defaultProps = {
    prefixCls: 'yy-image-picker',
  };

  render() {
    return <ImagePicker_ {...this.props} />;
  }
}
