import React from 'react';
import './CircleMenu.css';

export default function CircleMenu(props) {
  return (
    <div className={'Circle-menu ' + props.circleMenuClass}>
      <div id="line-1">
          sum up
      </div>
      <div id="line-2">
          
      </div>
      <div id="line-3">
          <div id="line-3-1"></div>
          <div id="line-3-2">jobs</div>
          <div id="line-3-3"></div>
          <div id="line-3-4">Univ. cursus</div>
          <div id="line-3-5"></div>
      </div>
    </div>
  );
}