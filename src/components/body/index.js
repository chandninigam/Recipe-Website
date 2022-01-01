import React from 'react';
import { Card } from './card';
export const Body = () => {
  const array = ['Rasgulla', 'Rasmalai', 'Sohan Halwa', 'Halwa'];
  const contentArray = [
    '1.  Take 1 litre of whole milk in a pan and bring it to a low boil on a low to medium heat.   2.While the milk is heating up, line a mesh strainer or colander with a piece of cheese cloth or muslin.   3.. Keep stirring the milk at intervals. This will help to prevent froth from forming on top and the base from scorching',
    '1.  To make rasmalai, you will need 12 to 15 rasgulla. You can either make them at home or you can use store bought ones.  2To make rasmalai, you will need 12 to 15 rasgulla. You can either make them at home or you can use store bought ones.',
    '1.  ngredients for Sohan Halwa Recipe  2. Arrowroot 2 cups + 1   3. Sugar',
    '1.  Take 1 litre of whole milk in a pan and bring it to a low boil on a low to medium heat.   2.While the milk is heating up, line a mesh strainer or colander with a piece of cheese cloth or muslin.   3.. Keep stirring the milk at intervals. This will help to prevent froth from forming on top and the base from scorching',
  ];
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
      <div className="mainContentContainer">
        {/* for(let i=0;i<array.length;i++){} */}
        <Card title={array[0]} mainContent={contentArray[0]} />
        <Card title={array[1]} mainContent={contentArray[1]} />
        <Card title={array[2]} mainContent={contentArray[2]} />
        <Card title={array[3]} mainContent={contentArray[3]} />
        {/* <Card /> */}
      </div>
    </div>
  );
};
