---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

进度条示例。

## en-US

Basic demo of Progress.

````jsx
import { Progress, Button } from 'yymobile';

class MyProgress extends React.Component {
  state = {
    percent: 50,
  };
  add = () => {
    let p = this.state.percent + 10;
    if (this.state.percent >= 100) {
      p = 0;
    }
    this.setState({ percent: p });
  }
  render() {
    const { percent } = this.state;
    return (
      <div className="progress-container">
        <Progress percent={40} position="normal" unfilled={false} appearTransition />
        <Button inline style={{ marginTop: 20, marginLeft: 30 }} onClick={this.add}>(+-)10</Button>
      </div>
    );
  }
}

ReactDOM.render(<MyProgress />, mountNode);
````

````css
.show-info {
  margin-top: 18px;
  display: flex;
  align-items: center;
}
.show-info .progress {
  margin-right: 5px;
  width: 100%;
}
````