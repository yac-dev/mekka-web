import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
  onClick: () => void;
  isPressed: boolean;
  isDisabled: boolean;
};

// buttonのdisableの判定もしないといかん。
export const Button: React.FC<ButtonProps> = ({ children, style, isPressed, isDisabled, onClick, ...attributes }) => {
  // isPressedなら色変えてかつ、iconを変えることになる。。。
  const buttonStyle = () => {
    if (isDisabled) {
      return {
        width: '100%',
        backgroundColor: 'rgb(120,120,120)',
        padding: '10px',
        margin: '0px',
        borderRadius: '5px',
        border: 'none',
      };
    } else if (isPressed) {
      return {
        width: '100%',
        backgroundColor: 'blue',
        padding: '10px',
        margin: '0px',
        borderRadius: '5px',
        border: 'none',
      };
    }
    return style;
  };
  // loading indicatorを出す感じかな。。。
  return (
    <button type='button' disabled={isDisabled || isPressed} style={buttonStyle()} onClick={onClick}>
      {children}
    </button>
  );
};
