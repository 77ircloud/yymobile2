---
order: 3
title:
  zh-CN: 固定高度
  en-US: 'fixed height'
---

固定外部容器高度

````jsx
import { Tabs } from 'yymobile';
import { WhiteSpace } from 'yymobile';

const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
];

const TabExample = () => (
  <div>
    <WhiteSpace />
    <div style={{ height: 200 }}>
      <Tabs tabs={tabs}
        initalPage={'t2'}
      >
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
    </div>
  </div>
);

ReactDOM.render(<TabExample />, mountNode);
````
