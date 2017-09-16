import React from 'react';
import { Picker as Picker_} from 'antd-mobile';
import Props from './PropsType';

export default class Picker extends React.Component<Props, any> {


  render() {
    return <Picker_ {...this.props} />;
  }
}
