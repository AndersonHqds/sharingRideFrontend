export function updateDriverData(socket) {
  return {
    type: '@driver/UPDATE_DRIVER_DATA',
    socket,
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
