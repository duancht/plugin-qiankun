// .umirc.js 是 UmiJS 默认的配置文件，用于存放项目的配置选项。
export default {
  publicPath: 'http://localhost:8000/',
  outputPath: '../dist',
  proxy: {
    '/api/app1': {
      target: 'http://localhost:8001',
      changeOrigin: true,
    },
    '/api/app2': {
      target: 'http://localhost:8002',
      changeOrigin: true,
    },
    '/api/app3': {
      target: 'http://localhost:8003',
      changeOrigin: true,
    },
  },
  qiankun: {
    master: {
      appNameKeyAlias: 'id'
    },
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index.js',   // 将布局组件作为路由配置的 component，使得可以在这个文件中取到 routes 的数据。
      routes: [
        {
          path: '/app2',
          exact: false,       // 开启非精确匹配，'/app2/user'同样处理
          component: './app2/index.js',
        },
        {
          path: '/app3',
          microApp: 'app3',
          settings: {
            singular: false,    // 可以在主应用中多次加载同一个微应用，每个实例都是独立的，具有自己的状态、路由等信息。
          },
          microAppProps: {
            autoSetLoading: true,
            className: 'appClassName',
            wrapperClassName: 'wrapperClass',
          },
        },
        {
          path: '/',
          component: './index.js',
        },
      ],
    },
  ],
  plugins: [
    '@umijs/plugin-dva',
    '@umijs/plugin-model',
    '@umijs/plugin-antd',
    '@umijs/plugin-qiankun',
  ],
};
