---
order: 0
title:
  zh-CN: 导航栏
  en-US: YyBar
---

````jsx

/* eslint no-console:0 */

import React from 'react';
import { YyUpload } from 'yymobile';

const style = `
        .rc-upload-disabled {
           opacity:0.5;
        `;

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.uploaderProps = {
      action: '/upload.do',
      data: { a: 1, b: 2 },
      headers: {
        Authorization: 'xxxxxxx',
      },
      multiple: true,
      beforeYyUpload(file) {
        console.log('beforeYyUpload', file.name);
      },
      onStart: (file) => {
        console.log('onStart', file.name);
        // this.refs.inner.abort(file);
      },
      onSuccess(file) {
        console.log('onSuccess', file);
      },
      onProgress(step, file) {
        console.log('onProgress', Math.round(step.percent), file.name);
      },
      onError(err) {
        console.log('onError', err);
      },
    };
    this.state = {
      destroyed: false,
    };
  }
  destroy = () => {
    this.setState({
      destroyed: true,
    });
  }
  render() {
    if (this.state.destroyed) {
      return null;
    }
    return (<div
      style={{
        margin: 100,
      }}
    >
      <h2>固定位置</h2>

      <style>
        {style}
      </style>

      <div>
        <YyUpload {...this.uploaderProps} ref="inner"><a>开始上传</a></YyUpload>
      </div>

      <h2>滚动</h2>

      <div
        style={{
          height: 200,
          overflow: 'auto',
          border: '1px solid red',
        }}
      >
        <div
          style={{
            height: 500,
          }}
        >
          <YyUpload {...this.uploaderProps} component="div" style={{ display: 'inline-block' }}>
            <a>开始上传2</a></YyUpload>
        </div>
      </div>

      <button onClick={this.destroy}>destroy</button>
    </div>);
  }
}

ReactDOM.render(
  <Test />, mountNode);
````
