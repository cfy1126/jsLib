import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  // replace: true; 不添加历史记录，无法回退
  return (
    <>
      {/* <button onClick={() => navigate('/about?id=001', { replace: false })}>
        跳转关于页
      </button> */}
      <button onClick={() => navigate('/about/1001', { replace: false })}>
        跳转关于页
      </button>
    </>
  );
}

export default Home;
