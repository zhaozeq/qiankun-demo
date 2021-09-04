import { extend } from 'umi-request';

const isDev = process.env.NODE_ENV === 'development';
const prefix = isDev ? '/api' : 'http://api.zache.top:33079/api';

export default extend({
  prefix,
});
