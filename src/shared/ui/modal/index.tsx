import React, { FC, ReactElement } from 'react';

import './index.scss';

export const Modal: FC<IModal> = ({ children, onClickClose, top, left }) => {
  return (
    <>
      <div className="modal" style={{ top, left }}>
        <div className="modal__header">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <img
            alt="close"
            onClick={onClickClose}
            className="modal__header_close"
            src="/icons/close.svg"
          />
        </div>
        <div className="modal__content">{children}</div>
      </div>
      <div className="modal__overlay" />
    </>
  );
};

interface IModal {
  top: string;
  left: string;
  children: ReactElement;
  onClickClose: () => void;
}
