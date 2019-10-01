import {all} from 'redux-saga/effects';
import driver from './driver/sagas';
export default function* rootSaga() {
  return yield all([driver]);
}
