import { extend } from 'umi-request';

const request = extend({
  prefix: '/api/blog',
});

export default request;
