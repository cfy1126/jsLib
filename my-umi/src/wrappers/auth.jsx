import { Redirect } from 'umi';

export default (props) => {
  if (Math.random() > 0.5) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};

/**
 * 1. 申明式路由重定向
 * 2. 响应式路由重定向
 */

