const initialState = {
    Users: [],
    Posts: [],
    User:{},
    mensajeResultado:'',
    UserLoged:{}
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
  
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

      case 'DELETE_USER':
        return{
          ...state,
          mensajeResultado:action.payload
        }
        case 'CREAR_USER':
          return{
            ...state,
            mensajeResultado:action.payload
          }
        case 'GET_USER_LOGED':
          return{
            ...state,
            UserLoged:action.payload
          }
          
      default:
        return {
          ...state
        }
    }
  }
  
  export default rootReducer;