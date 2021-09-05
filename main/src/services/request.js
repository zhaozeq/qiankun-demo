import { extend } from 'umi-request';

const isDev = process.env.NODE_ENV === 'development';
const prefix = isDev ? '/api' : 'http://meqrkig.nat.ipyingshe.com/api';

export default extend({
  prefix,
});
