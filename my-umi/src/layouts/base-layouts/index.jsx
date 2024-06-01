import React from 'react';
import Nav from '../../components/nav';

export default function BaseLayouts(props) {
  return (
    <div>
      <div>
        {/* <span>page BaseLayouts</span> */}
        <Nav></Nav>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
