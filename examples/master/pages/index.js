import React, { useState } from 'react';
import { MicroApp, useModel } from 'umi';
import style from './index.css';

export default function () {
  const [microAppState, setState] = useState('Hello');
  // 主应用使用 useModel('@@qiankunStateForSlave') 获取子应用传递的全局状态
  const { setQiankunGlobalState } = useModel('@@qiankunStateForSlave');

  return (
    <div className={style.container}>
      <h2>Welcome to use QianKun ~</h2>
      <p>
        如果在使用中遇到任何问题，请在
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/umijs/umi/issues/new/choose"
        >
          此处
        </a>
        提Issue
      </p>
      <button
        onClick={() => setQiankunGlobalState({ slogan: 'Hello Qiankun' })}
      >
        修改全局 state
      </button>
      <button onClick={() => setState((s) => s + 'o')}>修改子应用 props</button>
      {/* 使用 <MicroApp /> 组件的方式装载子应用*/}
      <MicroApp testProp1={microAppState} name="app1" />
    </div>
  );
}
