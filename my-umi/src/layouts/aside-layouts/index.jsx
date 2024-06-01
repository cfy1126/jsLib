import React from 'react';
import Menu from '../../components/menu';

export default function AsideLayouts(props) {
  return (
    <div style={{ display: 'flex', gap: 100 }}>
      {/* <h2>AsideLayouts</h2> */}
      <Menu></Menu>
      <div>{props.children}</div>
    </div>
  );
}


