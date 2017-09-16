import React from 'react';
import { Modal as Modal_} from 'antd-mobile';
import MenuProps from './PropsType';

export default class Modal extends React.Component<ModalProps, any> {

  static defaultProps = {
    prefixCls: 'yy-modal'
  };

  render() {
    return <Modal_ {...this.props} />;
  }
}
