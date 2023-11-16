import React, { useState } from 'react';
import { useModel, MicroAppWithMemoHistory } from 'umi';
import { Drawer } from 'antd';

export default function () {
  // 微应用中使用 useModel('@@qiankunStateFromMaster') 获取主应用传递过来的全局状态
  const { testProp1, globalState } = useModel('@@qiankunStateFromMaster') || {};
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h1>Dashboard 1</h1>
      <p>testProp1: {testProp1}</p>
      <p>globalState: {JSON.stringify(globalState)}</p>

      <h1>MicroAppWithMemoHistory</h1>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开 app2
      </button>

      <Drawer
        title="嵌入 app2"
        open={visible}
        onClose={() => {
          setVisible(false);
        }}
        width={800}
      >
        {/* 通过 <MicroAppWithMemoHistory /> 引入 app2
          <MicroAppWithMemoHistory /> 将 history 对象传递给微应用的根组件，使得每个微应用都能够拥有独立的路由管理能力。
          和<MicroApp />相比，<MicroAppWithMemoHistory />引入的app2在切换菜单时，主应用路由不会变化。
        */}
        <MicroAppWithMemoHistory
          name="app2"
          url="/user"
          current={2}
          pageSize={5}
        />
      </Drawer>
    </div>
  );
}
