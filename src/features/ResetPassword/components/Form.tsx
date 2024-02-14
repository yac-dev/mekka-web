import React from 'react';
import { useResetPassword } from '../hooks';
import { Button } from '../../../components/Button/Button';

export const Form: React.FC = () => {
  const { newPassword, onPasswordChange, isButtonPressed, onDonePress } = useResetPassword();
  console.log(newPassword);

  // passwordのlengthがない、もしくは10字以上なければtrue(disableの意味で)
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
      <Button
        isDisabled={newPassword.length && newPassword.length >= 10 ? false : true}
        isPressed={isButtonPressed}
        onClick={onDonePress}
        style={{
          width: '100%',
          backgroundColor: 'white',
          padding: '10px',
          margin: '0px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Submit
      </Button>
    </div>
  );
};
