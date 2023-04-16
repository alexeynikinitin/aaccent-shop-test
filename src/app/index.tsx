import './index.scss';
import { FC, Suspense } from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { store } from 'app/store';
import { Routing } from 'pages';
import { AppSpinner } from 'shared';
import { Footer, Header } from 'widgets';

export const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <HashRouter>
        <Suspense fallback={<AppSpinner />}>
          <Header />
          <Routing />
          <Footer />
        </Suspense>
      </HashRouter>
    </ReduxProvider>
  );
};
