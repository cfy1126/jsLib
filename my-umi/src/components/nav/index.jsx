import React from 'react';
import { NavLink, Link } from 'umi';

export default function Nav() {
  return (
    <div>
      <NavLink to="/goods" activeStyle={{ color: '#f99' }}>商品</NavLink>
      <NavLink to="/login" activeStyle={{ color: '#f99' }}>登录</NavLink>
      <NavLink to="/register" activeStyle={{ color: '#f99' }}>注册</NavLink>
    </div>
  );
}

/**
 * 声明式路由导航
 * NavLink
 * Link
 */
