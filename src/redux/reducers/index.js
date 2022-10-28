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
      case "GET_POST":
        return {
          ...state,
          Posts:action.payload
        };
        case "ADD_POST_POST":
          return {
            ...state,
            Posts:[ action.payload, ...state.Posts]
          };

          case "GET_USERS_ID":
            return {
              ...state,
              Users:action.payload
            };
            case "GET_USERS_POST":
              return {
                ...state,
                Users:action.payload
              };
        case "ADD_POST_ID":
          return {
            ...state,
            Posts:action.payload
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