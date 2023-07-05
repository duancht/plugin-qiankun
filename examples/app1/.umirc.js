export default {
  base: '/app1',    // 指定子应用的基本路径，会将 /app1 自动加到路由的路径上
  publicPath: '/app1/', // 指定子应用加载静态资源时的基本路径
  outputPath: './dist/app1',  // 构建后应用输出的路径
  mountElementId: 'app1', // 指定子应用在主应用中挂载的 DOM 元素的 ID 
  qiankun: {        // app1是master的子应用，同时又是app2的主应用
    master: {       // 主应用配置
      apps: [
        {
          name: 'app2',
          entry: 'http://localhost:8002/app2',
        },
      ],
    },
    slave: {},      // 子应用配置
  },
  plugins: [
    '@umijs/plugin-dva',
    '@umijs/plugin-model',
    '@umijs/plugin-antd',
    '@umijs/plugin-qiankun',
  ],
};
