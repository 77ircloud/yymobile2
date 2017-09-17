---
order: 0
title:
  zh-CN: 导航栏
  en-US: YyBar
---

````jsx
import { YyBar, Icon } from 'yymobile';

ReactDOM.render(
  <div>
    <YyBar leftContent=""
      mode="dark"
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >YyBar</YyBar>
  </div>
  , mountNode);
````
