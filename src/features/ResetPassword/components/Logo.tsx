import React from 'react';
import LogoImage from '../../../assets/appstore.png';

export const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={LogoImage} style={{ width: '100px', height: '100px', borderRadius: '20px' }} />
    </div>
  );
};
