import { BrowserRouter, useRoutes, Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Link to='/'>board</Link>
      <Link to='/article'>article</Link>
      <Outlet />
    </div>
  );
};
const Board = () => <div>board</div>;
const Article = () => <div>Article</div>;
const NotFound = () => <div>NotFound</div>;

// 1. 准备一个路由数组 数组中定义所有的路由对应关系
const routesList = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Board />,
        index: true, // index设置为true 变成默认的二级路由
      },
      {
        path: 'article',
        element: <Article />,
      },
    ],
  },
  // 增加n个路由对应关系
  {
    path: '*',
    element: <NotFound />,
  },
];

// 2. 使用useRoutes方法传入routesList生成Routes组件
function WrapperRoutes() {
  let element = useRoutes(routesList);
  return element;
}

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* 3. 替换之前的Routes组件 */}
        <WrapperRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
