import React from 'react';
import classnames from 'classnames';
import ReactCarousel from 'rmc-nuka-carousel';
import CarouselProps from './PropsType';

export default class YyCarousel extends React.Component<CarouselProps, any> {
  static defaultProps = {
    prefixCls: 'yy-carousel',
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    edgeEasing: 'linear',
    cellAlign: 'center',
    selectedIndex: 0,
    dotStyle: {},
    dotActiveStyle: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex,
    };
  }

  onChange = (index) => {
    this.setState({
      selectedIndex: index,
    }, () => {
      if (this.props.afterChange) {
        this.props.afterChange(index);
      }
    });
  }

  render() {
    const {
      infinite, selectedIndex, beforeChange, afterChange, dots, ...restProps,
    } = this.props;

    const {prefixCls, className, vertical} = restProps;

    const newProps = {
      ...restProps,
      wrapAround: infinite,
      slideIndex: selectedIndex,
      beforeSlide: beforeChange,

    };

    let Decorators: any[] = [];
    const {selectedIndex: current} = this.state;

    if (dots) {
      Decorators = [{
        component: ({slideCount}) => {
          return (
            <div className={`${prefixCls}-indicator`}>
              {current}/{slideCount}
            </div>
          );
        },
        position: 'BottomRight',
      }];
    }

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-vertical`]: vertical,
    });

    return (
      <ReactCarousel
        {...newProps}
        className={wrapCls}
        decorators={Decorators}
        afterSlide={this.onChange}
      />
    );
  }
}
