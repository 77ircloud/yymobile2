---
order: 0
title:
  zh-CN: 选择器
  en-US: 'DatePickerView'
---

````jsx
import { DatePickerView } from 'yymobile';
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';

class DatePickerViewExample extends React.Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  };
  onValueChange = (...args) => {
    console.log(args);
  };
  render() {
    return (<div>
      <div className="sub-title">Start DateTime</div>
      <DatePickerView
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
      <div className="sub-title">End DateTime</div>
      <DatePickerView
        locale={enUs}
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
    </div>);
  }
}

ReactDOM.render(<DatePickerViewExample />, mountNode);
````
````css
.sub-title {
  margin: 8px;
}
````
