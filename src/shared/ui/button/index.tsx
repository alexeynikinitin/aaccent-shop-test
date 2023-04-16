import React, { FC, MouseEvent } from 'react';

import './index.scss';

export const Button: FC<IButton> = ({ size, type, title, onClick }) => {
  const buttonClass = `button ${size === 'big' ? 'button_big' : ''} ${
    type === 'primary' ? 'button__primary' : 'button__outlined'
  }`;

  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      {title}
    </button>
  );
};

interface IButton {
  title: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  size?: 'big' | 'small';
  type: 'outlined' | 'primary';
}
