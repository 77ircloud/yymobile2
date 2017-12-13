// import React from 'react';

interface NavBarProps {
  prefixCls?: string;
  className?: string;
  placeholder?: string;
  children?: any;
  mode?: 'dark' | 'light';
  iconName?: string;
  leftContent?: any;
  rightContent?: any;
  onLeftClick?: () => void;
}

export default NavBarProps;
