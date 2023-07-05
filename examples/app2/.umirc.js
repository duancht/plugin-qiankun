import { name } from './package.json';

export default {
  base: name,
  publicPath: '/app2/',
  outputPath: './dist/app2',
  mountElementId: 'app2',
  qiankun: {
    slave: {},
  },
  plugins: [
    '@umijs/plugin-dva',
    '@umijs/plugin-model',
    '@umijs/plugin-antd',
    '@umijs/plugin-qiankun',
    // require.resolve('../../../plugin-dva/lib'),
    // require.resolve('../../../plugin-model/lib'),
    // require.resolve('../../../plugin-antd/lib'),
    // require.resolve('../../../plugin-qiankun/lib'),
  ],
};
