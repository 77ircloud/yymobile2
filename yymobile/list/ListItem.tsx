import React from 'react';
import { List as List_} from 'antd-mobile';
import { ListItemProps, BriefProps } from './PropsType';

export class Brief extends React.Component<BriefProps, any> {
  render() {
    return (
      <div className="am-list-brief" style={this.props.style}>{this.props.children}</div>
    );
  }
}

export default class ListItem extends React.Component<ListItemProps, any> {

  static defaultProps = {
    prefixCls: 'yy-list',
  };

  static Brief = Brief;

  render() {
    return <List_.Item {...this.props} />;
  }
}
