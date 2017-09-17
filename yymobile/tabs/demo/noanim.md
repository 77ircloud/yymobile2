---
order: 2
title:
  zh-CN: 无动画
  en-US: 'No animation'
---

Switch tabs without animation

````jsx
import { Tabs } from 'yymobile';
import { WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
];

const TabExample = () => (
  <div>
    <WhiteSpace />
    <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of First Tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of Second Tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of Third Tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
);

ReactDOM.render(<TabExample />, mountNode);
````