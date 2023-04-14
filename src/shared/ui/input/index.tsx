import React, { ChangeEvent, FC } from 'react';

export const Input: FC<IInput> = ({ className, onChangeInput, value, placeholder }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInput(e.target.value);
  };

  return <input placeholder={placeholder} className={className} value={value} onChange={onChange} />;
};

interface IInput {
  value: string;
  className?: string;
  placeholder?: string;
  onChangeInput: (value: string) => void;
}
