import { Redirect } from 'umi';

export default (props) => {
  if (true) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};

/**
 * 1. 申明式路由重定向
 * 2. 响应式路由重定向
 */

