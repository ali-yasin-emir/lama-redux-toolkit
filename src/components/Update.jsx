import React from 'react';
import John from '../image/john.jpg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update, remove } from '../redux/userSlice';

function Update() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(update({ name, email }));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(remove());
  };

  return (
    <div className='update'>
      <h1 className='update-header'>update your account</h1>
      <div className='update-info'>
        <p className='update-info__text'>
          Deleting account cannot be undone {user.name}! You should confirm your
          password to delete your account.
        </p>
        <button onClick={handleDelete} className='update-info__btn'>
          delete account
        </button>
      </div>
      <div className='profile'>
        <h1 className='profile-header'>profile picture</h1>
        <div className='profile-image-section'>
          <img className='acc__img' src={John} alt='john' />
          <span className='profile-image__button'>change</span>
        </div>
        <div className='profile-info'>
          <div className='profile-info__elements'>
            <div>
              <span className='username'>username</span>
            </div>
            <div>
              <input
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder='username'
              ></input>
            </div>
          </div>
          <div className='profile-info__elements'>
            <div>
              <span className='email'>email</span>
            </div>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                placeholder='email'
              ></input>
            </div>
          </div>
          <div className='profile-info__elements'>
            <div>
              <span className='password'>password</span>
            </div>
            <div>
              <input type='password'></input>
            </div>
          </div>
          <button onClick={handleUpdate} className='profile-info__update'>
            update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
