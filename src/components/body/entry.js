import React from 'react';
import img from '../../assert/HomeLogo.jpg'
export const EntryOfBody = () => {
  return <div className="entryOfBody">
    <div className='homeContentConatiner'>
    <div className='homeLogo'>
      <img src={img}/>
    </div>

    <div className='homeContent'>Excellence taste in Every Bite</div>
    </div>
  </div>;
};
