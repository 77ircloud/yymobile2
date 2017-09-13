// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined') {
  console.warn(
    'You are using a whole package of antd-mobile, ' +
    'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}

export { default as Accordion } from './accordion/index';
export { default as ActionSheet } from './action-sheet/index';
export { default as ActivityIndicator } from './activity-indicator/index';
export { default as Badge } from './badge/index';
export { default as Button } from './button/index';
export { default as Calendar } from './calendar/index';
export { default as Card } from './card/index';
export { default as Carousel } from './carousel/index';
export { default as Checkbox } from './checkbox/index';
export { default as DatePicker } from './date-picker/index';
export { default as DatePickerView } from './date-picker-view/index';
