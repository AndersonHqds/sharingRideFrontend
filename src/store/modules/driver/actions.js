export function updateDriverData(data) {
  return {
    type: '@driver/UPDATE_DRIVER_DATA',
    data,
  };
}

export function updateDriverDataSuccess(data, isSearching = false) {
  return {
    type: '@driver/UPDATE_DRIVER_DATA_SUCCESS',
    data: {
      data,
      isSearching,
    },
  };
}
