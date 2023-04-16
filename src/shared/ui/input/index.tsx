import React, { ChangeEvent, FC } from 'react';

export const Input: FC<IInput> = ({ id, type = 'text', className, onChangeInput, value, placeholder }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInput(e.target.value, id);
  };

  return <input type={type} placeholder={placeholder} className={className} value={value} onChange={onChange} />;
};

interface IInput {
  id?: string;
  value: string;
  className?: string;
  placeholder?: string;
  type?: 'text' | 'number';
  onChangeInput: (value: string, id?: string) => void;
}
