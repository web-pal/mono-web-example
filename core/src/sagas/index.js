// @flow
import {
  all,
  fork,
} from 'redux-saga/effects';

import * as uiSagas from './ui';
import * as resourcesSagas from './resources';
import initialize from './initialize';
import {
  watchForImageLoadingSaga,
} from './gallerySagas';

export default function* rootSaga(): Generator<*, void, *> {
  yield all([
    fork(uiSagas.listenGenerateRandomString),
    fork(resourcesSagas.listenFetchResourcesRequest),
    fork(watchForImageLoadingSaga),
    fork(initialize),
  ]);
}
