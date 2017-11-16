import React from 'react';
import {Carousel as Carousel_} from 'antd-mobile';
import Props from './PropsType';

export default class Carousel extends React.Component<Props, any> {

  static defaultProps = {
    prefixCls: 'yy-carousel',
    indicator: true
  };

  constructor(props) {
    super(props);
    this.state = {
      curIndex: props.selectedIndex || 0
    }
  }

  handleAfterChange = (current) => {
    this.props.afterChange && this.props.afterChange(current);
    this.setState({
      curIndex: current
    })
  };

  render() {
    const {indicator, dots, afterChange, ...otherProps} = this.props;
    let myDots = dots;
    if (indicator) {
      myDots = false;
    }
    console.log(indicator);

    return (
      <div className="yy-carousel-container">
        <Carousel_
          {...otherProps}
          dots={myDots}
          afterChange={this.handleAfterChange}
        />
        {
          indicator && (
            <div className="yy-carousel-indicator">
              {this.state.curIndex + 1}/{this.props.children.length}
            </div>
          )
        }
      </div>
    )
  }
}
