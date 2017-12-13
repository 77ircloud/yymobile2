import React from 'react';
import {StaticContainer} from './StaticContainer';

export interface PropsType {
  key?: string;
  className?: string;
  shouldUpdate: boolean;
  active: boolean;
  height?: any;
  top?: any;
  paneStyle?: any;
}

export class TabPane extends React.PureComponent<PropsType, {}> {
  layout: HTMLDivElement;
  offset = 0;

  componentWillReceiveProps(nextProps: PropsType) {
    if (this.props.active !== nextProps.active) {
      if (nextProps.active) {
        this.offset = 0;
      } else {
        this.offset = this.layout.scrollTop;
      }
    }
  }

  setLayout = (div: HTMLDivElement) => {
    this.layout = div;
  }

  render() {
    // const { shouldUpdate, active, ...props } = this.props;
    const {shouldUpdate, height, top, paneStyle, ...props} = this.props;
    return <div {...props} style={paneStyle} ref={this.setLayout}>
      <StaticContainer shouldUpdate={shouldUpdate}>
        {props.children}
      </StaticContainer>
    </div>;
  }
}
