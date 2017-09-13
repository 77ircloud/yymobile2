#!/usr/bin/env node

/* eslint-disable */
'use strict';

// Build a entry less file to dist/antd-mobile.less
var fs = require('fs');
var path = require('path').posix;

if(fs.existsSync(path.join(__dirname,'../dist'))) {
  console.log('Building a entry less file to dist/antd-mobile.less');
  var yymobilePath = path.join(process.cwd(), 'yymobile');
  var yymobileLessContent = '';

// Build components in one file: lib/style/components.less
  fs.readdir(yymobilePath, function (err, files) {
    files.forEach(function (file) {
      if (fs.existsSync(path.join(yymobilePath, file, 'style', 'index.less'))) {
        yymobileLessContent += `@import "../${path.join(file, 'style', 'index.less')}";\n`
      }
    });
    fs.writeFileSync(path.join(process.cwd(), 'yymobile', 'style', 'components.less'), yymobileLessContent);

    // Build less entry file: dist/antd.less
    fs.writeFileSync(
      path.join(process.cwd(), 'dist', 'yy-mobile.less'),
      '@import "../yymobile/style/index.less";\n@import "../yymobile/style/components.less";'
    );
  });
}
