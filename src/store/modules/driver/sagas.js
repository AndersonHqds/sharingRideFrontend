import {all, call, select} from 'redux-saga/effects';
import {getUniqueId} from 'react-native-device-info';
import Geolocation from '@react-native-community/geolocation';

function* driverData(data) {
  const id = yield call(getUniqueId);
  const state = yield select();
  Geolocation.getCurrentPosition(position => {
    const driver = {
      ...state,
      id,
      from: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      stops: [[-22.707921, -47.369918]],
    };
  });

  yield put(updateDriverDataSuccess(driver, true));
}
