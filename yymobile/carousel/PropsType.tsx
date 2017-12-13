interface Props {
  children?: any;
  selectedIndex?: number;
  indicator?: boolean;
  dots?: boolean;
  vertical?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  infinite?: boolean;
  easing?: Function;
  beforeChange?: (from: number, to: number) => void;
  afterChange?: (current: number) => void;
  style?: any;
  dotStyle?: any;
  dotActiveStyle?: any;
  swipeSpeed?: number;
  pagination?: Function;
  initialSlideWidth?: number;
}

export default Props;
