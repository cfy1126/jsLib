import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import {
  HashRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from 'react-router-dom';
// -------------------------------------------------------------------
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const items1 = ['1', '2', '3'].map(key => ({
  key,
  label: <Link to={`nav${key}`}>{`nav ${key}`}</Link>,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const Contents = () => {
  return (
    <Content
      style={{
        padding: '0 24px',
        minHeight: 280,
      }}
    >
      Content
    </Content>
  );
};
const Substance = () => {
  return (
    <Content
      style={{
        padding: '0 48px',
      }}
    >
      <Layout
        style={{
          padding: '24px 0',
        }}
      >
        <Sider width={200}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
            }}
            items={items2}
          />
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Content>
  );
};
const App = () => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className='demo-logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Outlet />
    </Layout>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={<App />}
        >
          <Route
            index
            element={<Substance />}
          ></Route>
          <Route
            path='/nav1'
            element={<Navigate to='/' />}
          />
          <Route
            path='nav2'
            element={<Substance />}
          ></Route>
          <Route
            path='nav3'
            element={<Substance />}
          ></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
