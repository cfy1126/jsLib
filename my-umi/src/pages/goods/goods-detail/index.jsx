import React from 'react';
// import { history } from 'umi';
import { useHistory, useParams, useLocation, useRouteMatch } from 'umi';

export default function GoodsDetail(
  {
    // history,
    // location: { search },
    // match: {
    //   params: { id },
    // },
  },
) {
  const history = useHistory();
  const { id } = useParams();
  const { query } = useLocation();
  console.log(useLocation());
  const getCommnet = () => {
    // history.push('/goods/3/comment');
    history.push({
      pathname: '/goods/3/comment',
      query: {
        a: 3,
      },
    });
  };
  return (
    <>
      <h3>GoodsDetail - {id}</h3>
      <div>{query.a}</div>
      <button onClick={getCommnet}>编程式跳转</button>
    </>
  );
}

/**
 * 编程式跳转
 * 1. umi 导出的 history 对象
 * 2. props 导出自带的 history 对象
 * 3. 使用 useHistory hook获取对象
 */

/**
 * 获取参数的方法
 * 1. 使用props 导出自带上下文 location match
 */

/**
 * 丢失上下文路由参数情况
 * 1. 组件在非路由渲染路径上被调用
 * 2. 嵌套路由(子组件)
 * 3. 高阶组件
 * 解决方案：使用withRouter包装组件
 */
