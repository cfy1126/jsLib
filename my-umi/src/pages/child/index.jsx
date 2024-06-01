import { useContext, memo } from 'react';
import MyContext from '../context';

function Child({ data }) {
  const { count, setCount } = useContext(MyContext);
  console.log(MyContext);
  console.log(data);
  return (
    <>
      <h1>子组件</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

export default memo(Child);
