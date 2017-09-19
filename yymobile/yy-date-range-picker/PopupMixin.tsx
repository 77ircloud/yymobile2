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
      startTime: null,
      endTime: null,
    };
  },

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        pickerValue: nextProps.value,
      });
    }
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
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
        endTimeVal = pickerValue;
        this.setState({
          pickerValue,
          endTime: pickerValue,
        });
      }
      const { picker, pickerValueChangeProp } = this.props;
      console.log('pickerValueChangeProp', pickerValueChangeProp)
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

  fireVisibleChange(visible) {
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setVisibleState(visible);
      }
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
    this.fireVisibleChange(!this.state.visible);
  },

  onOk() {
    const { startTime, endTime } = this.state;
    this.props.onOk(startTime, endTime);
    this.fireVisibleChange(false);
  },

  getContent() {
    if (this.props.picker) {
      let { pickerValue } = this.state;
      if (pickerValue === null) {
        pickerValue = this.props.value;
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
