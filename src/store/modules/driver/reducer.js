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
  switch (action.types) {
    case '@driver/UPDATE_DRIVER_DATA':
      return {state, ...action};
    default:
      return state;
  }
}
