import { Link, Routes, Route, HashRouter, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Link to='/'>board&nbsp;</Link>
      <Link to='/article'>article</Link>
      <h1>layout</h1>
      <Outlet />
    </div>
  );
};
const Article = () => <h2>article</h2>;
const Board = () => <h2>board</h2>;
const NotFound = () => <div>this is NotFound</div>;

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            // path='board'
            element={<Board />}
          />
          <Route
            path='article'
            element={<Article />}
          />
        </Route>
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
