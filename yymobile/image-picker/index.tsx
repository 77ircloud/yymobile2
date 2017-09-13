import React from 'react';
import { ImagePicker as _ImagePicker} from 'antd-mobile';
import ImagePickerPropTypes from './PropsType';

export default class ImagePicker extends React.Component<ImagePickerPropTypes, any> {

  static defaultProps = {
    prefixCls: 'yy-image-picker',
  };

  render() {
    return <_ImagePicker {...this.props} />;
  }
}
