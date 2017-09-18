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
import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import 'rmc-picker/assets/popup.css';
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
    mode: 'datetime',
    locale: zhCn,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }

  onChange = (date) => {
    console.log('onChange', format(date));
    this.setState({
      date,
    });
  }

  onDismiss = () => {
    console.log('onDismiss');
  }

  show = () => {
    console.log('my click');
  }

  render() {
    const props = this.props;
    const { date } = this.state;
    const datePicker = (
      <DatePickere
        rootNativeProps={{'data-xx': 'yy'}}
        minDate={minDate}
        maxDate={maxDate}
        defaultDate={now}
        mode={props.mode}
        locale={props.locale}
      />
    );
    return (<div style={{ margin: '10px 30px' }}>
      <h2>popup date picker</h2>
      <div>
        <YyDateRangePicker
          datePicker={datePicker}
          transitionName="yyc-picker-popup-slide-fade"
          maskTransitionName="yyc-picker-popup-fade"
          title="Date picker"
          date={date}
          onDismiss={this.onDismiss}
          onChange={this.onChange}
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
