import React from 'react';
import { Picker as _Picker} from 'antd-mobile';
import Props from './PropsType';

export default class Picker extends React.Component<Props, any> {


  render() {
    return <_Picker {...this.props} />;
  }
}
