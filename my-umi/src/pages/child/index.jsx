import { memo } from 'react';
function Child({data}) {
  console.log(data);
  //   console.log(data);
  return <h1>子组件</h1>;
}

export default memo(Child);
