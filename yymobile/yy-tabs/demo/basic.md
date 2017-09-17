---
order: 0
title:
  zh-CN: 选项卡
  en-US: Tabs
---

多用于页面的内容区块，起着控制小范围内的大块内容的分组和隐藏，起着保持界面整洁的作用。


````jsx
import { YyTabs } from 'yymobile';

const TabExample = () => (
  <div>
    <YyTabs tabs={[
      { key: 't1', title: 't1' },
      { key: 't2', title: 't2' },
      { key: 't3', title: 't3' },
      { key: 't4', title: 't4' },
      { key: 't5', title: 't5' },
    ]} initalPage={'t2'}
    >
      <div key="t1"><p>content1</p></div>
      <div key="t2"><p>content2</p></div>
      <div key="t3"><p>content3</p></div>
      <div key="t4"><p>content4</p></div>
      <div key="t5"><p>content5</p></div>
    </YyTabs>
  </div>
);

ReactDOM.render(<TabExample />, mountNode);
````
