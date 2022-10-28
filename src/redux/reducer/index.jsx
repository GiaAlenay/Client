const initialState = {
  Users: [],
  Posts: [],
 
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    //todos los pokemones
    case 'GET_USERS':
      return {
        ...state,
        Users: action.payload,
      };

    default:
      return {
        ...state
      }
  }
}

export default rootReducer;