import React from 'react';

import './index.scss';

export const AppSpinner = () => {
  return (
    <>
      <div className="appSpinner">
        <img src="public/icons/spinner.svg" alt="spinner" />
      </div>
      <div className="appSpinner__overlay" />
    </>
  );
};
