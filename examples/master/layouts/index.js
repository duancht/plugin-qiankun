import { Breadcrumb, Layout, Menu } from 'antd';
import { connect } from 'dva';
import React from 'react';
import { Link } from 'umi';
import style from './style.less';

const { Header, Content, Footer } = Layout;

const renderBreadCrumb = (pathname) => {
  let arr = pathname.split('/').slice(1);
  if (arr[0] === '') {
    arr[0] = 'Home';
  }
  return (
    <Breadcrumb className={style.breadcrumb}>
      {arr.map((name) => {
        return <Breadcrumb.Item key={name}>{name}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

// connect 是 react-redux 库提供的一个函数，用于将组件与 Redux 进行连接。
// ({ base }) => ({ base }) 是一个回调函数，它接受 Redux 中的状态对象（model的namespace）作为参数，并返回一个对象。
// @connect 装饰器会将返回的对象与组件进行连接，将 base 属性映射到组件的 props 上，使得组件可以通过 props 访问到 Redux 的状态属性。

@connect(({ base }) => ({ base }))
export default class extends React.PureComponent {      // 默认导出一个继承自 React.PureComponent 的匿名类
  constructor(props) {
    super(props);
    const { dispatch } = props;
    dispatch({
      type: 'base/getApps',
    });
  }

  render() {
    const {
      location,
      children,
      base,
      route: { routes = [] },
    } = this.props;
    // console.log(this.props);
    // props.loction：当前页面的位置信息，{ pathname, query, state}
    // props.route: 当前路由信息, {routes, path, component}
    // props.history: 提供与页面导航相关的方法   
    // props.children: 组件的子元素
    // props.base：通过connect函数传入
    const { name, apps } = base;
    const selectKey = '/' + location.pathname.split('/')[1];
    return (
      <Layout className={style.layout}>
        <Header>
          <div className={style.logo}>{name}</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            selectedKeys={[selectKey]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            {routes?.map((route) => {
              let name = (route.name ?? route.path)?.replace('/', '');

              return name ? (
                <Menu.Item key={route.path}>
                  <Link to={route.path}>{name}</Link>
                </Menu.Item>
              ) : null;
            })}
          </Menu>
        </Header>
        <Content className={style.content}>
          {renderBreadCrumb(location.pathname)}
          {children}
        </Content>
        <Footer className={style.footer}>
          Ant Design ©2019 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
