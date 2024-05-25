import { useState, useCallback, useMemo } from 'react';
import { Button } from 'antd';
import { Button as V2Button } from 'antd-mobile-v2';
import { Button as V5Button } from 'antd-mobile';
import bg from '@/assets/favicon.ico';
import Child from '@/pages/child';
import styles from './index.less';

export default function IndexPage() {
  const [count, setCount] = useState(10);
  const [value,setValue] = useState(null);
  const [obj, setObj] = useState({ a: 10 });
  const onChangeCount = useCallback((value) => setCount(value), []);
  const countFormat = useMemo(()=> {
    console.log(count);
    return count * 10;
  },[count])

  return (
    <div>
      {/* <h1 className={styles.title}>组件</h1>
      <Button type="primary">Button</Button>
      <V2Button type="primary">Button</V2Button>
      <V5Button color="primary" fill="solid">
        Solid
      </V5Button> */}

      {/* 
      <h1>图片资源引入</h1>
      <img src={bg} alt="bg"  width={100} height={100}/>
      <img src={require('../assets/favicon.ico')} alt="bg" width={100}/> */}
      {/* 临时存放图片目录 */}
      {/* <h1 style={{width: 100}} className='test'>样式内部使用</h1> */}

      {/* 
      <h1>全局样式和局部样式</h1>
      <a href="https://www.baidu.com" className='myLink title'>百度</a> */}
      {/* <h1>混合</h1>
      <div id="a1">测试一</div>
      <div className="a2">测试二</div>
      <h1>嵌套</h1>
      <div className={styles.nesting}>
        <h2>测试3</h2>
        <p>测试四</p>
      </div>
      <h1>:global</h1>
      <div className="linkin">
        <h2 className='cao'>测试5</h2>
        <p>测试六</p>
      </div> */}

      <h1>父组件</h1>
      <div>{countFormat}</div>
      <input type="text" onChange={(e)=> setValue(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Child data={obj} onchangeCount={onChangeCount} />
    </div>
  );
}
