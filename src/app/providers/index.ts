import { compose } from '@reduxjs/toolkit';

import { withRouter } from 'app/providers/with-router';

export const withProviders = compose(withRouter);
