/**
 * Created by spider on 6/27/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
/*
 attention:
 1.When this file has been rewritten,u should restart webpack-server;
 */

const webpack = require('webpack');

var path = require('path');
// var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ROOT_PATH = path.join(__dirname, "..");

var babelOptions = {
  "presets": [
    "react",
    [
      "es2015",
      {
        "modules": false
      }
    ],
    "es2016"
  ]
};

var config = {
  entry: {
    path: path.join(ROOT_PATH, "/yymobile/index")
  },
  output: {
    path: path.join(ROOT_PATH, "/yydist"),
    filename: 'yymobile.min.js',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules文件夹
        loader: 'babel-loader',
        options: {    //加了option 包会大10K左右。
          babelrc: false,
          presets: [[ 'es2015', { modules: false }], 'react', 'stage-0' ],
          plugins: ['transform-runtime','transform-decorators-legacy'],
          cacheDirectory:true
        }
      },
       {
         test: /\.tsx$/,
         exclude: /node_modules/, // 排除node_modules文件夹
         use: [{
            loader: 'babel-loader',
            options: {    //加了option 包会大10K左右。
              babelrc: false,
              presets: [[ 'es2015', { modules: false }], 'react', 'stage-0' ],
              plugins: ['transform-runtime','transform-decorators-legacy'],
              cacheDirectory:true
            }
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'yyTSconfig.json',
            }
          }]
       },
       {
          test: /\.svg$/,
          exclude: /node_modules/, // 排除node_modules文件夹
          use: 'svg-inline-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('node_modules')
    ],
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      "antd-mobile": path.resolve(ROOT_PATH, './dist/antd-mobile.min.js'),
    }
  },
  externals:{
    // "antd-mobile": 'antd-mobile',
    moment:'moment',
    'hammerjs': 'hammerjs',
    'react-dom': 'react-dom',
    react:'react',
    'rc-table': 'rc-table',
    'rc-slider': 'rc-slider',
    'rmc-list-view': 'rmc-list-view',
    'rc-tabs': 'rc-tabs',
    'zscroller': 'zscroller',
    'rc-trigger': 'rc-trigger',
    'dom-align': 'dom-align',
    'rc-drawer': 'rc-drawer',
    'core-js': 'core-js',
    'create-react-class': 'create-react-class',
    'rc-dialog': 'rc-dialog',
    'rmc-date-picker': 'rmc-date-picker',
    'rc-gesture': 'rc-gesture',
    'rmc-nuka-carousel': 'rmc-nuka-carousel'
  },
  plugins:[
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: function () {
    //       return [precss, autoprefixer];
    //     }
    //   }
    // })
    // ,new BundleAnalyzerPlugin({
    //   analyzerMode: 'server',
    //   // Host that will be used in `server` mode to start HTTP server.
    //   analyzerHost: '127.0.0.1',
    //   // Port that will be used in `server` mode to start HTTP server.
    //   analyzerPort: 8866,
    //   // Path to bundle rep
    // })
  ]

};

module.exports = config;
