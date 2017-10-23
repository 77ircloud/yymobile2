import React from 'react';

function noop() {
}

export default {
  getDefaultProps() {
    return {
      onVisibleChange: noop,
      okText: '确定',
      pickerValueProp: 'selectedValue',
      pickerValueChangeProp: 'onValueChange',
      dismissText: '取消',
      title: '',
      onOk: noop,
      onDismiss: noop,
    };
  },

  getInitialState() {
    return {
      pickerValue: 'value' in this.props ? this.props.value : null,
      visible: this.props.visible || false,
      onStart: true,
      startTime: this.props.startDate,
      endTime: this.props.endDate,
    };
  },

  componentWillReceiveProps(nextProps) {
    const { onStart } = this.state;
    const { visible } = this.props;
    this.setState({
      pickerValue: onStart ? nextProps.startDate : nextProps.endDate,
      startTime: nextProps.startDate,
      endTime: nextProps.endDate,
    });
    if ('visible' in nextProps) {
      if (nextProps.visible !== visible) {
        this.setVisibleState(nextProps.visible);
      }
    }
  },

  onPickerChange(pickerValue) {
    const { onStart, startTime, endTime } = this.state
    let endTimeVal = endTime, startTimeVal = startTime;
    if (this.state.pickerValue !== pickerValue) {

      if (onStart) {
        startTimeVal = pickerValue;
        this.setState({
          pickerValue,
          startTime: pickerValue,
        });
      } else {
        endTimeVal = new Date(
          pickerValue.getFullYear(),
          (pickerValue.getMonth() + 1),
          pickerValue.getDate(),
          23,
          59,
          59
        );
        this.setState({
          pickerValue: endTimeVal,
          endTimeVal,
          endTime: endTimeVal,
        });
      }
      const { picker, pickerValueChangeProp } = this.props;
      if (picker && picker.props[pickerValueChangeProp]) {
        picker.props[pickerValueChangeProp](startTimeVal, endTimeVal);
      }
    }
  },

  saveRef(picker) {
    this.picker = picker;
  },

  setVisibleState(visible) {
    this.setState({
      visible,
    });
    if (!visible) {
      this.setState({
        pickerValue: null,
      });
    }
  },

  fireVisibleChange(visible, isForce) {
    if (this.state.visible !== visible) {
      this.setVisibleState(visible);
      this.props.onVisibleChange(visible);
    }
  },

  getRender() {
    const props = this.props;
    const children = props.children;
    if (!children) {
      return this.getModal();
    }
    const { WrapComponent, disabled } = this.props;
    const child = children;
    const newChildProps = {};
    if (!disabled) {
      newChildProps[props.triggerType] = this.onTriggerClick;
    }
    return (<WrapComponent style={props.wrapStyle}>
      {React.cloneElement(child, newChildProps)}
      {this.getModal()}
    </WrapComponent>);
  },

  onTriggerClick(e) {
    const child = this.props.children;
    const childProps = child.props || {};
    if (childProps[this.props.triggerType]) {
      childProps[this.props.triggerType](e);
    }
    this.fireVisibleChange(!this.state.visible, true);
  },

  onOk() {
    const { startTime, endTime } = this.state;
    if (this.props.onOk(startTime, endTime)) {
      this.fireVisibleChange(false);
    };
  },

  getContent() {
    const { onStart, startTime, endTime } = this.state
    const { startDate, endDate } = this.props
    if (this.props.picker) {
      let { pickerValue } = this.state;
      if (pickerValue === null) {
        pickerValue = onStart ? startTime : endTime;
      }
      // console.log('如果选中结束时间，则需要限制结束时间大于开始时间')
      // 如果选中结束时间，则需要限制结束时间大于开始时间
      if (!onStart) {
        return React.cloneElement(this.props.picker, ({
          [this.props.pickerValueProp]: pickerValue,
          [this.props.pickerValueChangeProp]: this.onPickerChange,
          minDate: startTime,
          ref: this.saveRef,
        }));
      } else {
        return React.cloneElement(this.props.picker, ({
          [this.props.pickerValueProp]: pickerValue,
          [this.props.pickerValueChangeProp]: this.onPickerChange,
          maxDate: endTime,
          ref: this.saveRef,
        }));
      }
      return React.cloneElement(this.props.picker, ({
        [this.props.pickerValueProp]: pickerValue,
        [this.props.pickerValueChangeProp]: this.onPickerChange,
        ref: this.saveRef,
      }));
    } else {
      return this.props.content;
    }
  },

  onDismiss() {
    this.props.onDismiss();
    this.fireVisibleChange(false);
  },

  hide() {
    this.props.onDismiss();
    this.fireVisibleChange(false);
  },
  switchStart() {
    const { startTime, pickerValue } = this.state;
    this.setState({
      onStart: true,
      pickerValue: startTime ? startTime : pickerValue
    })
  },
  switchEnd() {
    const { endTime, pickerValue } = this.state;
    this.setState({
      onStart: false,
      pickerValue: endTime ? endTime : pickerValue
    })
  }
};
