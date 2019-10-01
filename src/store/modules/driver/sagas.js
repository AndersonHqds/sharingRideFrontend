import {all, call, select, takeLatest, put, cps} from 'redux-saga/effects';
import {getUniqueId} from 'react-native-device-info';
import Geolocation from '@react-native-community/geolocation';
import {updateDriverDataSuccess} from '~/store/modules/driver/actions';

function* driverData({socket}) {
  const id = yield call(getUniqueId);
  const state = yield select();

  if (!state.isSearching) {
    const {coords} = yield cps(cb =>
      Geolocation.getCurrentPosition(position => cb(null, position)),
    );
    const driver = {
      ...state.driver.driver,
      id,
      from: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
      stops: [[-22.707921, -47.369918]],
    };
    console.tron.log(driver);
    yield put(updateDriverDataSuccess(driver, true));
    socket.emit('driver-status', driver);
  }
}

export default all([takeLatest('@driver/UPDATE_DRIVER_DATA', driverData)]);
