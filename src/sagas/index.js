import { all } from 'redux-saga/effects';
import appSagas from './app';

export default function* rootSagas() {
  yield all([
    appSagas(),
  ]);
}
