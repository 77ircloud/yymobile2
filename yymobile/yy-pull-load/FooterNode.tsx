
import React, { PureComponent, PropTypes } from 'react'
import { STATS } from './constants'

export default class FooterNode extends PureComponent{

  static propTypes = {
    loaderState: PropTypes.string.isRequired,
    hasMore: PropTypes.bool.isRequired
  };

  static defaultProps = {
    loaderState: STATS.init,
    hasMore: true,
    prefixCls: 'yy-pull-load',
  };

  render(){
    const {
      loaderState,
      hasMore,
      prefixCls,
    } = this.props

    let className = `${prefixCls}-footer-default ${hasMore? "" : "nomore"}`

    return(
      <div className={className}>
        {
          loaderState === STATS.loading ? <i/> : ""
        }
      </div>
    )
  }
}
