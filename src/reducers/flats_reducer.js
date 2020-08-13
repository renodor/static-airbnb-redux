const flatsReducer = (state, action) => {
  // needed to handle default state (initialization)
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
};

export default flatsReducer;
