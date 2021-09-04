import { extend } from 'umi-request';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
const isDev = process.env.NODE_ENV === 'development';
const prefix = isDev ? '/api/blog' : 'http://api.zache.top:33079/api/blog';

const request = extend({
  prefix,
});

export default request;
