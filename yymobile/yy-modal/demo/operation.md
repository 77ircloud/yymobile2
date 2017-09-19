---
order: 3
title:
  zh-CN: 操作弹窗
  en-US: operation
---

## zh-CN

操作对话框。

## en-US

YyYyModal with operations.

````jsx
import { YyModal, Button, WhiteSpace, WingBlank } from 'yymobile';

const operation = YyModal.operation;

const App = () => (
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Button onClick={() => operation([
      { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
      { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
    ])}
    >Operation</Button>
    <WhiteSpace size="lg" />
  </WingBlank>
);

ReactDOM.render(<App />, mountNode);

````