import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, style, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};
