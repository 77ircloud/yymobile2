import React from 'react';
import { Modal as _Modal} from 'antd-mobile';
import MenuProps from './PropsType';

export default class Modal extends React.Component<ModalProps, any> {

  static defaultProps = {
    prefixCls: 'yy-modal'
  };

  render() {
    return <_Modal {...this.props} />;
  }
}
