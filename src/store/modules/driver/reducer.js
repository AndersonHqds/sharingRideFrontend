import produce from 'immer';

const INITIAL_STATE = {
  isSearching: false,
  driver: {
    id: null,
    isAvailable: true,
    amountPlaces: 4,
    name: 'Anderson',
    placa: 'EOP-5275',
    carro: 'Meriva',
    from: {
      latitude: 'a',
    },
    stops: [[]],
  },
};

export default function driver(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@driver/UPDATE_DRIVER_DATA_SUCCESS':
      console.tron.log(action);
      return {state, ...action};
    default:
      return state;
  }
}
