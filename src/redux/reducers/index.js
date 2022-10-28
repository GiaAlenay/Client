const initialState = {
    Users: [],
    Posts: [],
    User:{}
   
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
  
      //todos los pokemones
      case 'GET_USERS':
        return {
          ...state,
          Users: action.payload,
        };

      case 'GET_BY_ID':
        return{
          ...state,
          User:action.payload
        }

      default:
        return {
          ...state
        }
    }
  }
  
  export default rootReducer;