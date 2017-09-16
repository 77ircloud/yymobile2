import React from 'react';
import { View as View_} from "antd-mobile";

export default class View extends React.Component<any, any> {
  render() {
    return <View_ {...this.props} />;
  }
}
