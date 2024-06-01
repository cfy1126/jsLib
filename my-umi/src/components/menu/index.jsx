import React from 'react';
import { NavLink } from 'umi';

export default function Menu() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <NavLink to="/goods/1" activeStyle={{ color: '#f99' }}>
        商品分类一
      </NavLink>
      <NavLink
        to={{ pathname: '/goods/2', query: {a: 2} }}
        activeStyle={{ color: '#f99' }}
      >
        商品分类二
      </NavLink>
      <NavLink
        to={{ pathname: '/goods/3', query: { a: 3 } }}
        activeStyle={{ color: '#f99' }}
      >
        商品分类三
      </NavLink>
    </div>
  );
}
