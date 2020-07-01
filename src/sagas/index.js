import {all, fork} from 'redux-saga/effects';

import {
  watchContacts,
  watchContact,
  watchDeleteContact,
  watchSaveContact,
} from './contacts';
export default function* rootSaga() {
  yield all([
    fork(watchContacts),
    fork(watchContact),
    fork(watchDeleteContact),
    fork(watchSaveContact),
  ]);
}
