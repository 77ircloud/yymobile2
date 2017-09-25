---
category: Components
type: YYMobile
title: YyPullLoad
subtitle: 下拉刷新
---

### 简介
1. 只依赖 react/react-dom
2. 样式使用 less 编写
3. 支持 body 或者组件根 DOM 固定高度作为外部容器 contianer（即可视区域大小）
4. 触摸事件绑定在内容块 content（即高度为 auto 的DOM ）
5. 纯 React 组件方式开发的
6. 支持自定义刷新和加载更多 UI 组件
7. 支持代码动态调起刷新和加载更多（组件将展示刷新和加载更多样式）
8. **只支持移动触摸设备**

### 功能点
1. 下拉距离大于阈值触发刷新动作
2. 滚动到距底部距离小于阈值加载更多
3. 支持自定义刷新和加载更多 UI 组件

### 参数说明：
| 参数 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| action | 用于同步状态 | string | | isRequired |
| handleAction | 用于处理状态 | func | | isRequired |
| hasMore | 是否还有更多内容可加载 | bool |false | |
| downEnough | 下拉距离是否满足要求 | num | 100 | |
| distanceBottom | 距离底部距离触发加载更多 | num | 100 |  |
| isBlockContainer | 是否开启使用组件根 DOM 作为外部容器 contianer | bool | false |  |
| HeadNode | 自定义顶部刷新 UI 组件 | any | [ReactPullLoad HeadNode](./src/HeadNode.jsx) | 必须是一个 React 组件 |
| FooterNode | 自定义底部加载更多 UI 组件 | any | [ReactPullLoad FooterNode](./src/FooterNode.jsx) | 必须是一个 React 组件 |

另外 ReactPullLoad 组件支持根属性扩展 例如： className\style 等等


### STATS list

| 属性 | 值 | 根节点 className | 说明 |
| --- | --- | --- | --- |
| init | '' | | 组件初始状态 |
| pulling | 'pulling' | state-pulling | 下拉状态 |
| enough | 'pulling enough' | state-pulling.enough| 下拉并且已经满足阈值 |
| refreshing | 'refreshing' | state-refreshing| 刷新中（加载数据中） |
| refreshed | 'refreshed' | state-refreshed| 完成刷新动作 |
| reset | 'reset' | state-reset| 恢复默认状态 |
| loading | 'loading' | state-loading | 加载中 |

init/reset -> pulling -> enough -> refreshing -> refreshed -> reset

init/reset -> pulling -> reset

init/reset -> loading -> reset
