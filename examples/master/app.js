import { useState } from 'react';
import request from './services/request';

// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = request('/apps').then((apps) => ({
  apps,     // 子应用配置
  routes: [ // 子应用运行时需要注册的微应用路由
    // 没搞明白？？和 .umirc.js中的routes效果一样
    {
      path: '/app1',
      microApp: 'app1',
      microAppProps: {
        autoSetLoading: true,
        className: 'appClassName',    // 给微应用的容器元素添加 CSS 类名
        wrapperClassName: 'wrapperClass',   // 给微应用渲染的包装容器（<div> 元素）添加 CSS 类名
        loader: (loading) => {
          return loading ? <div>runtime loading</div> : null;
        },
      },
    },
  ],
}));

// 配合 useModel('@@qiankunStateForSlave') 实现父子应用通讯
export const useQiankunStateForSlave = () => {
  const [globalState, setQiankunGlobalState] = useState({
    slogan: 'Hello MicroFrontend',
  });

  return {
    globalState,
    setQiankunGlobalState,
  };
};
