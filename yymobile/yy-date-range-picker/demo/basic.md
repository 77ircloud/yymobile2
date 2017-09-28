---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

Tag 分为两种类型：`selectable` / `readonly`, 后者是无交互的，尺寸更小，通常用于内容展示。

## en-US

There are two kinds of Tag, selectable and readonly type, the latter is a smaller tag without interactive behavior, which is typically used for display content.

````jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { YyDateRangePicker, DatePickere } from 'yymobile';

console.log(YyDateRangePicker, 666)

const minDate = new Date(2015, 8, 15, 10, 30, 0);
const maxDate = new Date(2018, 1, 1, 23, 49, 59);
let now = new Date();

const cn = typeof location !== 'undefined' ? location.search.indexOf('cn') !== -1 : false;
if (cn) {
  now = new Date();
} else {
  now = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
}

function format(date) {
  let mday = date.getDate();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  mday = mday < 10 ? `0${mday}` : mday;
  return `${date.getFullYear()}-${month}-${mday} ${date.getHours()}:${date.getMinutes()}`;
}

const zhCn = {
  year: '年',
  month: '月',
  day: '日',
  hour: '时',
  minute: '分',
  am: '上午',
  pm: '下午',
};


class Demo extends React.Component<any, any> {
  static defaultProps = {
    locale: zhCn,
  };

  constructor(props) {
    super(props);
    this.swichVisible = this.swichVisible.bind(this)
    this.state = {
      date: null,
      visible: false
    };
  }

  onChange = (startTime, endTime) => {
    console.log('onChange', startTime, endTime);
    /*this.setState({
      date,
    });*/
  }

  onDismiss = () => {
    console.log('onDismiss');
  }

  swichVisible() {
    const { visible } = this.state;
    this.setState({
      visible: !visible
    })
  }

  show = () => {
    console.log('my click');
  }

  onOk = (startTime, endTime) => {
    console.log('onOK', startTime, endTime)
    return true;
  }

  render() {
    const props = this.props;
    const startDate = new Date("2016-6-6");
    const endDate = new Date("2017-7-7");
    const { date, visible } = this.state;
    return (<div style={{ margin: '10px 30px' }}>
      <h2>popup date picker</h2>
      <button onClick={this.swichVisible}>switch</button>
      <div>
        <YyDateRangePicker
          transitionName="yyc-picker-popup-slide-fade"
          maskTransitionName="yyc-picker-popup-fade"
          title="Date picker"
          onDismiss={this.onDismiss}
          onOk={this.onOk}
          rootNativeProps={{'data-xx': 'yy'}}
          minDate={minDate}
          maxDate={maxDate}
          locale={props.locale}
          onDateChange={this.onChange}
          startDate={startDate}
          endDate={endDate}
          visible={visible}
        >
          <button onClick={this.show}>{date && format(date) || 'open'}</button>
        </YyDateRangePicker>
      </div>
    </div>);
  }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.tag-container{
  display: flex;
  padding-top: 9px;
  flex-direction: row;
  flex-wrap: wrap;
}
.tag-container > div {
  margin-left: 9px;
  margin-bottom: 9px;
}
````
