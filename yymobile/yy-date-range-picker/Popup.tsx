import React from 'react';
import Modal from 'rc-dialog';
import createClass from 'create-react-class';
import { IPopupPickerProps } from './PopupPickerTypes';
import PopupMixin from './PopupMixin';
import Touchable from 'rc-touchable';

const PopupPicker = createClass<IPopupPickerProps, any>({
  mixins: [PopupMixin],

  getDefaultProps() {
    return {
      prefixCls: 'yy-picker-popup',
      triggerType: 'onClick',
      WrapComponent: 'span',
    };
  },
  getModal() {
    const props = this.props;
    const { startTime, endTime } = this.state;
    let startTimeStr = '', endTimeStr = '', endTimeDate, startTimeDate;
    if (startTime) {
      startTimeDate = new Date(startTime);
      startTimeStr = startTimeDate.getFullYear() + '-' +
      (startTimeDate.getMonth() + 1) + '-' + startTimeDate.getDate();
    }
    if (endTimeDate) {
      endTimeDate = new Date(endTime);
      endTimeStr = endTimeDate.getFullYear() + '-' +
      (endTimeDate.getMonth() + 1) + '-' + endTimeDate.getDate();
    }
    if (!this.state.visible) {
      return null;
    }
    const { prefixCls } = props;
    console.log(startTime)
    return (
      <Modal
        prefixCls={`${prefixCls}`}
        className={props.className || ''}
        visible
        closable={false}
        transitionName={props.transitionName || props.popupTransitionName}
        maskTransitionName={props.maskTransitionName}
        onClose={this.hide}
        style={props.style}
      >
        <div>
          <div className={`${prefixCls}-range`}>
            <Touchable activeClassName={`${prefixCls}-start`}>
              <div className={`${prefixCls}-range-item ${prefixCls}-left`} onClick={this.switchStart}>
                <p>开始时间</p>
                <p>{startTimeStr}</p>
              </div>
            </Touchable>
            <Touchable activeClassName={`${prefixCls}-end`}>
              <div className={`${prefixCls}-range-item ${prefixCls}-right`} onClick={this.switchEnd}>
                <p>结束时间</p>
                <p>{endTimeStr}</p>
              </div>
            </Touchable>
          </div>
          {this.getContent()}
          <div className={`${prefixCls}-header`}>
            <Touchable activeClassName={`${prefixCls}-item-active`}>
              <div className={`${prefixCls}-item ${prefixCls}-header-left`} onClick={this.onDismiss}>
                {props.dismissText}
              </div>
            </Touchable>
            <Touchable activeClassName={`${prefixCls}-item-active`}>
              <div className={`${prefixCls}-item ${prefixCls}-header-right`} onClick={this.onOk}>
                {props.okText}
              </div>
            </Touchable>
          </div>
        </div>
      </Modal>
    );
  },

  render() {
    return this.getRender();
  },
});

export default PopupPicker;
