import React from 'react';
import classnames from 'classnames';
import { SearchBarProps, SearchBarState, defaultProps } from './PropsType';
import { SearchBar as SearchBar_ } from "antd-mobile";

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static defaultProps = defaultProps;
  rightBtnInitMarginleft: any;
  firstFocus: any;
  scrollIntoViewTimeout: any;
  blurFromOnClear: any;
  onBlurTimeout: any;
  inputRef: any;
  private rightBtnRef: any;
  private syntheticPhContainerRef: any;
  private syntheticPhRef: any;
  private inputContainerRef: any;

  render() {
    return <SearchBar_ {...this.props} />;
  }
}
