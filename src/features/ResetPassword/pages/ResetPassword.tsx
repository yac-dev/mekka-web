import React from 'react';
import '../styles/index.css';
import { Logo, Form } from '../components';
import { useResetPassword } from '../hooks';

export const ResetPassword: React.FC = () => {
  return (
    <div className='page-container'>
      <div className='reset-password-container'>
        <Form />
        <Logo />
      </div>
    </div>
  );
};
