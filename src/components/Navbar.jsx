import React from 'react';
import John from '../image/john.jpg';
import { useSelector } from 'react-redux';

function Navbar() {
  const name = useSelector((state) => state.user.name);
  return (
    <div className='navbar'>
      <div className='logo'>lama app</div>
      <div className='nav_menu'>
        <a href='/#' className='nav__link'>
          home
        </a>
        <a href='/#' className='nav__link'>
          about
        </a>
        <a href='/#' className='nav__link'>
          contact
        </a>
      </div>
      <div className='search'>
        <input
          className='search__input'
          type='text'
          placeholder='Search for something...'
        />
      </div>
      <div className='acc'>
        <span className='acc__name'>{name}</span>
        <img className='acc__img' src={John} alt='john' />
        <a href='/#'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 acc__icon'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
