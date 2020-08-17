export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLAT = 'SELECT_FLAT';

export function setFlats() {
  return fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json') // triggers a GET request
    .then(response => response.json())
    .then((data) => {
    // Do something with the data returned by the API
      return {
        type: SET_FLATS,
        payload: data
      };
    });
}

export function selectFlat(flat) {
// TODO: Api call! For now, simulate a DB
  return {
    type: SELECT_FLAT,
    payload: flat
  };
}
