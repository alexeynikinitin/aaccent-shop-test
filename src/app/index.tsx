import './index.scss';
import { withProviders } from 'app/providers';
import { Routing } from 'pages';
import { Footer, Header } from 'widgets';

export const App = withProviders(() => {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
});
