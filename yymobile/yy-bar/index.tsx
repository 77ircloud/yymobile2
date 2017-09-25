/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import NavBarProps from './PropsType';
import SearchBar from '../yy-search-bar/index';

export default class YyBar extends React.Component<NavBarProps, any> {
  static defaultProps = {
    prefixCls: 'yy-yybar',
    mode: 'dark',
    iconName: 'left',
    placeholder: '请输入搜索内容',
    onLeftClick() {
    },
  };

  render() {
    const {
      prefixCls, className, children, mode, iconName, leftContent, rightContent, onLeftClick,
      placeholder,
      ...restProps,
    } = this.props;

    const wrapCls = classnames(prefixCls, `${prefixCls}-${mode}`, className);

    return (
      <div {...restProps} className={wrapCls}>
        <div className={`${prefixCls}-left`} role="button" onClick={onLeftClick}>
          {
            iconName && (
              <span className={`${prefixCls}-left-icon`} aria-hidden="true">
                <Icon type={iconName} size="xs"/>
              </span>
            )
          }
          <span className={`${prefixCls}-left-content`}>{leftContent}</span>
        </div>
        <div className={`${prefixCls}-right`}>
          <SearchBar showCancelButton={true} cancelText={'搜索'} placeholder={placeholder} />
        </div>
      </div>
    );
  }
}
