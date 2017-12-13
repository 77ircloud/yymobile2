import React from 'react';
import {Modal as Modal_} from 'antd-mobile';
import {ModalComponent, ModalProps} from './PropsType';

export default class Modal extends ModalComponent<ModalProps, any> {

  static defaultProps = {
    prefixCls: 'yy-modal'
  };

  render() {
    return <Modal_ {...this.props} />;
  }
}
