import { compose } from '@reduxjs/toolkit';

import { withRedux } from 'app/providers/with-redux';
import { withRouter } from 'app/providers/with-router';

export const withProviders = compose(withRouter, withRedux);
