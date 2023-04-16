import React from 'react';

import './index.scss';

export const AppSpinner = () => {
  return (
    <>
      <div className="appSpinner">
        <img src="/aaccent-shop-test/icons/spinner.svg" alt="spinner" />
      </div>
      <div className="appSpinner__overlay" />
    </>
  );
};
