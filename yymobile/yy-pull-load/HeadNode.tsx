
import React, { PureComponent, PropTypes } from 'react'
import { STATS } from './constants'

export default class HeadNode extends PureComponent{

  static propTypes = {
    loaderState: PropTypes.string.isRequired,
  };

  static defaultProps = {
    loaderState: STATS.init,
    prefixCls: 'yy-pull-load',
  };

  render(){
    const {
      loaderState,
      prefixCls
    } = this.props

    return(
      <div className={`${prefixCls}-head-default`}>
        <i/>
      </div>
    )
  }
}
