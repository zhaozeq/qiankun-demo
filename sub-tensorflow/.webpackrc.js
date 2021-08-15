'use strict';
const path = require('path');
const packageName = require('./package.json').name;

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

export default {
  // publicPath: '/static/tensorflow/',
  // output: {
  //   library: `${packageName}-[name]`,
  //   libraryTarget: 'umd',
  //   jsonpFunction: `webpackJsonp_${packageName}`,
  // },
  alias: {
    '@': resolve('src'),
  },
};
