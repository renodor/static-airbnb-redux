import flats from '../flats';

// eslint-disable-next-line import/prefer-default-export
export function setFlats() {
// TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_FLATS',
    payload: flats
  };
}
