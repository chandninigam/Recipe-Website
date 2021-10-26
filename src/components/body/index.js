import React from 'react';
import img from '../../Image/foodHome.jpg';
export const Body = () => {
  return (
    <div className="content">
      {/* Content div having 2 parts
					a)Content Container(It contain catchy lines)
					b)Img Container(It container Image)
			*/}
      {/* <p>lorem chandni NIGAM</p> */}
      <div className="contentContainer">I am Food</div>
      <div className="imgContainer">
        {/* {' '} */}
        {/* i am body */}
        <img src={img} alt="homeImg" className="imageHome" />
      </div>
    </div>
  );
};
