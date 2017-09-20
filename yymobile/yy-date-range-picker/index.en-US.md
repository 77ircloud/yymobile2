---
category: Components
type: YYMobile
title: YYDateRangePicker
---

Layout controls

## API

Support WEB, React-Native.

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| onChange| 改变时间时触发的函数 | (startTime: Date, endTime: Date): void  |  - |
| minDate | 可选择的最小时间 | Date | - |
| maxDate | 可选择的最大时间 | Date | - |
| onOk | 点击确定时触发的函数 | (startTime: Date, endTime: Date): void  |  - |
| defaultDate | 默认时间 | Date | - |
| mode | 日期选择的类型, 可以是日期date,时间time,日期+时间datetime,年year,月month | String | - |
| locale | 国际化，可覆盖全局[LocaleProvider](https://mobile.ant.design/components/locale-provider)的配置 | Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText } | - |
