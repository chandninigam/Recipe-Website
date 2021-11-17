import React from 'react';
import { Card } from './card';
export const Body = () => {
  return (
    <div className="content">
      {/* Content div having 2 parts
					a)Content Container(It contain catchy lines)
					b)Img Container(It container Image)
			*/}
      {/* <p>lorem chandni NIGAM</p> */}
      <div className="contentContainer">
        <h2>Vegetartian</h2>
        <ul className="veg">
          <li>Indian</li>
          <li>South Indian</li>
          <li>Chinese</li>
          <li>Italian</li>
        </ul>
        <h2>Non-Vegetartian</h2>
        <ul>
          <li>Chicken</li>
          <li>Mutton</li>
          <li>Fish</li>
          <li>Egg</li>
        </ul>
      </div>
      <div className="imgContainer">
        <Card />
      </div>
    </div>
  );
};
