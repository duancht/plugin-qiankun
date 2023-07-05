import { extend } from 'umi-request';

export default extend({
  prefix: 'http://localhost:8000/api',  // 在请求的 url 前头填充<prefix>
});
