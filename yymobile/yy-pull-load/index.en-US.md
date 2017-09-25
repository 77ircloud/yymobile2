---
category: Components
type: YYMobile
title: YyPullLoad
---

### version 1.0.4

### Description
1. Only depend on react/react-dom, without any other package.
2. Use less.
3. Support body or root Dom as container.
4. Bind touch event on component root Dom.
5. It.s develop as Pure react component.
6. Support config UI component (HeadNode and FooterNode).
7. Can apply refreshing or loading through modify STATE.
8. **Only support mobile device**

## API：
| Property | Description | Type | default | Remarks |
| --- | --- | --- | --- | --- |
| action | sync component status | string | | isRequired |
| handleAction | handle status | func | | isRequired |
| hasMore | flag for are there any more content to load | bool |false | |
| downEnough | how long distance is enough to refreshing | num | 100 | use px as unit |
| distanceBottom | current position is apart from bottom | num | 100 | use px as unit |
| isBlockContainer | set root dom as container | bool | false |  |
| HeadNode | custom header UI compoent | any | [ReactPullLoad HeadNode](./src/HeadNode.jsx) | must be a react component |
| FooterNode | custom footer UI compoent | any | [ReactPullLoad FooterNode](./src/FooterNode.jsx) | must be a react component |

Remarks: ReactPullLoad support set root dom className and style.


### STATS list

| Property | Value | root className | explain |
| --- | --- | --- | --- |
| init | '' | | component initial status |
| pulling | 'pulling' | state-pulling | pull status |
| enough | 'pulling enough' | state-pulling.enough| pull down enough status |
| refreshing | 'refreshing' | state-refreshing| refreshing status fetch data |
| refreshed | 'refreshed' | state-refreshed| refreshed |
| reset | 'reset' | state-reset| reset status |
| loading | 'loading' | state-loading | fetching data |

init/reset -> pulling -> enough -> refreshing -> refreshed -> reset

init/reset -> pulling -> reset

init/reset -> loading -> reset
