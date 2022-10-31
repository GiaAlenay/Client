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
        case "GET_POST":
          return{
            ...state,
            Posts:action.payload
          }
        case "CREAT_POST":
          return{
            ...state,
          }
      default:
        return {
          ...state
        }
    }
  }
  
  export default rootReducer;