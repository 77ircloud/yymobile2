---
order: 0
title:
  zh-CN: '类型、尺寸'
  en-US: 'Type, Size'
---

button

````jsx
import { YyButton, WhiteSpace, WingBlank } from 'yymobile';

/* eslint global-require: 0 */
const YyButtonExample = () => (
  <WingBlank>
    <YyButton>default</YyButton><WhiteSpace />
    <YyButton disabled>default disabled</YyButton><WhiteSpace />

    <YyButton type="primary">primary</YyButton><WhiteSpace />
    <YyButton type="primary" disabled>primary disabled</YyButton><WhiteSpace />

    <YyButton type="warning">warning</YyButton><WhiteSpace />
    <YyButton type="warning" disabled>warning disabled</YyButton><WhiteSpace />

    <YyButton loading>loading button</YyButton><WhiteSpace />
    <YyButton icon="check-circle-o">with icon</YyButton><WhiteSpace />
    <YyButton icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" className="my-icon" alt="icon" />}>with custom icon</YyButton><WhiteSpace />

    {/* <YyButton activeStyle={false}>无点击反馈</YyButton><WhiteSpace /> */}
    {/* <YyButton activeStyle={{ backgroundColor: 'red' }}>custom feedback style</YyButton><WhiteSpace /> */}

    <WhiteSpace />
    <YyButton type="primary" inline style={{ marginRight: '4px' }}>inline primary</YyButton>
    <YyButton type="ghost" inline style={{ marginRight: '4px' }}>inline ghost</YyButton>

    <WhiteSpace />
    <YyButton type="primary" inline size="small" style={{ marginRight: '4px' }}>primary</YyButton>
    <YyButton type="primary" inline size="small" disabled>primary disabled</YyButton>
    <WhiteSpace />
    <YyButton type="ghost" inline size="small" style={{ marginRight: '4px' }}>ghost</YyButton>
    <YyButton type="ghost" inline size="small" disabled>ghost disabled</YyButton>
  </WingBlank>
);
ReactDOM.render(<YyButtonExample />, mountNode);
````

````css
.my-icon {
  width: 22px;
  height: 22px;
}
````
