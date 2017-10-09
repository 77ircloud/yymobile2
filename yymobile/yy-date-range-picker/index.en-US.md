---
category: Components
type: YYMobile
title: YYDateRangePicker
---

Layout controls

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| onDateChange| 改变时间时触发的函数 | (startTime: Date, endTime: Date): void  |  - |
| onDismiss | 取消是触发的函数 | (startTime: Date, endTime: Date): void | - |
| visible | 控制是否显示，显示前可以控制，显示后的关闭由组件内部控制 | booleam | false |
| minDate | 可选择的最小时间 | Date | - |
| maxDate | 可选择的最大时间 | Date | - |
| onOk | 点击确定时触发的函数，return false可阻止弹窗隐藏 | (startTime: Date, endTime: Date): void  |  - |
| startDate | 默认开始时间 | Date | 今天 |
| endDate | 默认结束时间 | Date | 今天 |
| locale | 国际化，可覆盖全局[LocaleProvider](https://mobile.ant.design/components/locale-provider)的配置 | Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText } | - |