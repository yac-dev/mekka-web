import React from 'react';
import { useResetPassword } from '../hooks';
import { Button } from '../../../components/Button/Button';

export const Form: React.FC = () => {
  const { newPassword, onPasswordChange } = useResetPassword();
  console.log(newPassword);

  const onButtonClick = () => {
    console.log(newPassword);
  };

  return (
    <div className='form-container'>
      <p className='form-header-title'>Reset password</p>
      <p className='form-header-subtitle'>Did you forget your password?</p>
      <div className='password-input-container'>
        <input
          placeholder='Enter new password'
          className='password-input'
          name='reset-password'
          value={newPassword}
          onChange={(event) => onPasswordChange(event.target.value)}
        />
      </div>
      <Button onClick={onButtonClick} style={{ width: '100%', backgroundColor: 'red', padding: '0px', margin: '0px' }}>
        Done
      </Button>
    </div>
  );
};
