---
order: 1
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

受控组件建议使用([rc-form ](https://github.com/react-component/form))

## en-US

Recommended use of [rc-form ](https://github.com/react-component/form) for controlled component.

````jsx
import { InputItem } from 'yymobile';
import { List, WhiteSpace } from 'yymobile';
import { createForm } from 'rc-form';

class BasicInputExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        aaValue:11.2
      };
    }
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.customFocusInst.focus();
  }
  handleChange = (v) => {
    this.setState({
      aaValue:v
    })
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => 'Customize to focus'} prefixCls="yy-list">
          <InputItem
            placeholder="auto focus"
            type="number"
            value={this.state.aaValue}
            onChange={this.handleChange}
            ref={el => this.autoFocusInst = el}
            fractionDigits={3}
            integers={10}
          >输入数字</InputItem>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="auto focus"
            ref={el => this.autoFocusInst = el}
          >标题</InputItem>
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="click the button below to focus"
            ref={el => this.customFocusInst = el}
          >标题</InputItem>
          <List.Item prefixCls="yy-list">
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick}
            >
              click to focus
            </div>
          </List.Item>
        </List>

        <List renderHeader={() => 'Whether is controlled'} prefixCls="yy-list">
          <InputItem
            {...getFieldProps('control')}
            placeholder="Hello World"
          >受控组件</InputItem>
          <InputItem
            placeholder="please input content"
            data-seed="logId"
          >非受控组件</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'click label to focus input'} prefixCls="yy-list">
          <InputItem
            placeholder="click label to focus input"
            ref={el => this.labelFocusInst = el}
          ><div onClick={() => this.labelFocusInst.focus()}>标题</div></InputItem>
        </List>

        <List renderHeader={() => 'Show clear icon'}>
          <InputItem
            {...getFieldProps('inputclear')}
            clear
            placeholder="displayed clear icon while typing"
          >标题</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Number of words for title'}>
          <InputItem
            {...getFieldProps('label8')}
            placeholder="limited title length"
            labelNumber={5}
          >标题过长超过默认的5个字</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Custom title（text / image / empty)'}>
          <InputItem
            {...getFieldProps('input3')}
            placeholder="no label"
          />
          <InputItem
            {...getFieldProps('inputtitle2')}
            placeholder="title can be icon，image or text"
          >
            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Customize the extra content in the right'}>
          <InputItem
            {...getFieldProps('preice')}
            placeholder="0.00"
            extra="¥"
          >价格</InputItem>
        </List>

        <WhiteSpace />
        <List renderHeader={() => 'Format'}>
          <InputItem
            {...getFieldProps('bankCard', {
              initialValue: '8888 8888 8888 8888',
            })}
            type="bankCard"
          >银行卡</InputItem>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="186 1234 1234"
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="****"
          >密码</InputItem>
          <InputItem
            {...getFieldProps('number')}
            type="number"
            placeholder="click to show number keyboard"
          >数字键盘</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Not editable / Disabled'}>
          <InputItem
            value="Not editable"
            editable={false}
          >姓名</InputItem>
          <InputItem
            value="style of disabled `InputItem`"
            disabled
          >姓名</InputItem>
        </List>
      </div>
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);
ReactDOM.render(<BasicInputExampleWrapper />, mountNode);
````

````css
.demoTitle:before,
.demoTitle:after {
  border-bottom: none;
}
````
