import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
  useParams
} from 'react-router-dom';
import Test from './传递参数';

// 准备俩个路由组件

const Home = () => <div>this is home</div>;
const About = () => {
  // 搜索参数
  // let [params] = useSearchParams();
  // let id = params.get('id');
  // console.log(id);

  // 路由参数
  let params = useParams();
  console.log(params.id);
  return <div>this is about</div>;
};

function App() {
  return (
    <div className='App'>
      {/* 按照规则配置路由 */}
      <BrowserRouter>
        <Test />
        <Link to='/'>首页</Link>
        <Link to='/about'>关于</Link>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          ></Route>
          <Route
            path='/about/:id'
            element={<About />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
