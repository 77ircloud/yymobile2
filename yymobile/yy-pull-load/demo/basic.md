---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

```<WingBlank size='md'>...</WingBlank>```

````jsx
import React, { Component, PureComponent, PropTypes } from 'react'
import { render } from 'react-dom'
import { ReactPullLoad } from 'yymobile'

const STATS = ReactPullLoad.STATS


const defaultStyle ={
  width: "100%",
  textAlign: "center",
  fontSize: "20px",
  lineHeight: "1.5"
}

const loadMoreLimitNum = 2;

const cData = [
    "http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803184_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803186_1200x1000_0.jpg"
]

export class App extends Component{
  constructor(){
    super();
    this.state ={
      hasMore: true,
      data: cData,
      action: STATS.init,
      index: loadMoreLimitNum //loading more test time limit
    }
  }

  handleAction = (action) => {
    console.info(action, this.state.action,action === this.state.action);
    //new action must do not equel to old action
    if(action === this.state.action ||
       action === STATS.refreshing && this.state.action === STATS.loading ||
       action === STATS.loading && this.state.action === STATS.refreshing){
      console.info("It's same action or on loading or on refreshing ",action, this.state.action,action === this.state.action);
      return false
    }

    if(action === STATS.refreshing){//刷新
      setTimeout(()=>{
        //refreshing complete
        this.setState({
          data: cData,
          hasMore: true,
          action: STATS.refreshed,
          index: loadMoreLimitNum
        });
      }, 3000)
    } else if(action === STATS.loading){//加载更多
      this.setState({
        hasMore: true
      });
      setTimeout(()=>{
        if(this.state.index === 0){
          this.setState({
            action: STATS.reset,
            hasMore: false
          });
        } else{
          this.setState({
            data: [...this.state.data, cData[0], cData[0]],
            action: STATS.reset,
            index: this.state.index - 1
          });
        }
      }, 3000)
    }

    //DO NOT modify below code
    this.setState({
      action: action
    })
  }

  getScrollTop = ()=>{
    if(this.refs.reactpullload){
      console.info(this.refs.reactpullload.getScrollTop());
    }
  }
  setScrollTop = ()=>{
    if(this.refs.reactpullload){
      console.info(this.refs.reactpullload.setScrollTop(100));
    }
  }

  render(){
    const {
      data,
      hasMore
    } = this.state

    const fixHeaderStyle = {
      position: "fixed",
      width: "100%",
      height: "50px",
      color: "#fff",
      lineHeight: "50px",
      backgroundColor: "#e24f37",
      left: 0,
      top: 0,
      textAlign: "center",
      zIndex: 1
    }

    const fixButtonStyle = {
      position: "fixed",
      top: 200,
      width: "100%",
    }

    return (
      <div>
        <div style={fixHeaderStyle}>
          fixed header
        </div>
        <ReactPullLoad
          downEnough={150}
          ref="reactpullload"
          className="block"
          isBlockContainer={true}
          action={this.state.action}
          handleAction={this.handleAction}
          hasMore={hasMore}
          style={{paddingTop: 50}}
          distanceBottom={1000}>
          <ul className="test-ul">
            <button onClick={this.handleAction.bind(this, STATS.refreshing)}>refreshing</button>
            <button onClick={this.handleAction.bind(this, STATS.loading)}>loading more</button>
            <div style={fixButtonStyle}>
              <button onClick={this.getScrollTop}>getScrollTop</button>
              <button onClick={this.setScrollTop}>setScrollTop</button>
            </div>
            {
              data.map( (str, index )=>{
                return <li key={index}><img src={str} alt=""/></li>
              })
            }
          </ul>
        </ReactPullLoad>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);
````

````css
li{font-size: 20px; width: 100%;list-style: none;}
img{width: 100%;}
div, .test-ul, p{margin: 0; padding: 0;}
.block{position: absolute; height: 100%;}

button{
  display: inline-block;
  font-weight: 500;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
  padding: 4px 15px;
  font-size: 12px;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  position: relative;
  color: rgba(0,0,0,.65);
  background-color: #fff;
  border-color: #d9d9d9;
  outline: 0;
  margin-right: 8px;
  margin-bottom: 12px;
  margin-top: 12px;
  -webkit-appearance: button;
  box-sizing: border-box;
}
````
