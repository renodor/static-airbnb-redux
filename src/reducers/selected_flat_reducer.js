export default function(state, action) {
  // needed to handle default state (initialization)
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case 'SELECT_FLAT':
      return action.payload;
    default:
      return state;
  }
}
