import { ReactNode } from 'react';

import { Provider as ReduxProvider } from 'react-redux';

import { store } from 'app/store';

export const withRedux = (component: () => ReactNode) => () =>
  <ReduxProvider store={store}>{component()}</ReduxProvider>;
