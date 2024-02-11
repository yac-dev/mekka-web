import React, { useState } from 'react';

export const useResetPassword = (): { newPassword: string; onPasswordChange: (text: string) => void } => {
  const [newPassword, setNewPassword] = useState('');

  const onPasswordChange = (text: string) => {
    setNewPassword(text);
  };

  return {
    newPassword,
    onPasswordChange,
  };
};
