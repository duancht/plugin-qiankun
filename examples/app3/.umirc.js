export default {
  publicPath: '/app3/',
  outputPath: '../dist/app3',
  mountElementId: 'app3',
  qiankun: {
    slave: {},
  },
  plugins: [
    '@umijs/plugin-dva',
    '@umijs/plugin-model',
    '@umijs/plugin-antd',
    '@umijs/plugin-qiankun',
  ],
  // TODO 测试约定式路由优先于layouts中的Menu
  // routes: [
  //   { path: '/', exact: true, component: './index.js' },
  //   { path: '/:abc', component: './$abc.js' },
  //   { path: '/users', component: './user/index.js' },
  // ],
  // TODO 测试 dynamicImport
  // dynamicImport: true,
};
