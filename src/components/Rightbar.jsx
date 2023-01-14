import React from 'react';
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';
import { useSelector } from 'react-redux';

function Rightbar() {
  const name = useSelector((state) => state.user.name);
  return (
    <div className='rightbar'>
      <div className='rightbar__item'>
        <h1 className='rightbar__header'>Reccomended for {name}</h1>
        <img className='rightbar__img' src={img1} alt='img1'></img>
      </div>
      <div className='rightbar__item'>
        <h1 className='rightbar__header'>Popular on Lama App</h1>
        <img className='rightbar__img' src={img2} alt='img2'></img>
      </div>
      <div className='rightbar__item'>
        <h1 className='rightbar__header'>Editor's choice</h1>
        <img className='rightbar__img' src={img3} alt='img3'></img>
      </div>
      <button className='rightbar__button'>See More &darr;</button>
    </div>
  );
}

export default Rightbar;
