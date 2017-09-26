/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import YyUploadProps from './PropsType';
import Upload from 'rc-upload';

export default class YyUpload extends React.Component<YyUploadProps, any> {
  static defaultProps = {
    prefixCls: 'yy-Upload',
    multiple: true,
  };

  render() {
    return (
      <Upload {...this.props} />
    );
  }
}
