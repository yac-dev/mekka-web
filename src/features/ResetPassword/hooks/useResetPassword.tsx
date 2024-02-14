import React, { useState } from 'react';

export const useResetPassword = (): {
  newPassword: string;
  onPasswordChange: (text: string) => void;
  isButtonPressed: boolean;
  onDonePress: () => void;
} => {
  const [newPassword, setNewPassword] = useState('');
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const onPasswordChange = (text: string) => {
    setNewPassword(text);
  };

  // ここで、api request送る感じかな。。。
  const onDonePress = () => {
    setIsButtonPressed(true);
  };

  return {
    newPassword,
    onPasswordChange,
    isButtonPressed,
    onDonePress,
  };
};
