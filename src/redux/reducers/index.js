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
      case "ADD_POST":
        return {
          ...state,
          Posts:action.payload
        };
      case "CREATE_POST":
        return{
      ...state,
      Posts:action.payload
        }
    
        
        
  
      default:
        return {
          ...state
        }
    }
  }
  
  export default rootReducer;