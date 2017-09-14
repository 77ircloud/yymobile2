import React from 'react';
import { View as _View} from "antd-mobile";

export default class View extends React.Component<any, any> {
  render() {
    return <_View {...this.props} />;
  }
}
