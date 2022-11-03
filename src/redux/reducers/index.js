const initialState = {
  Users: [],
  Posts: [],
  User:{},
  mensajeResultado:'',
  UserLoged:{}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //Actions USERS
    case 'GET_USERS':
      return {
        ...state,
        Users: action.payload,
      };

    case 'GET_USER_BY_ID':
      return{
        ...state,
        mensajeResultado:action.payload.msg,
        User:action.payload.user
      };

    case 'DELETE_USER':
      return{
        ...state,
        mensajeResultado:action.payload.msg
      };

    case 'CREATE_USER':
      return{
        ...state,
        mensajeResultado:action.payload.msg,
        UserLoged: action.payload.user
      };

    case 'GET_USER_LOGED':
      return{
        ...state,
        mensajeResultado:action.payload.msg,
        UserLoged:action.payload.user
      };

    case 'EDIT_USER':
      return{
        ...state,
        mensajeResultado:action.payload.msg,
        UserLoged:action.payload.user
      };
    
    //Actions POSTS
    case "GET_POSTS":
      return{
        ...state,
        Posts:action.payload
      };

    case "CREATE_POST":
      return{
        ...state,
      };
    case "DELETE_POST":
      return{
        ...state
      }
    
    //DEFAULT
    default:
      return {
        ...state
      };
  }
}
  
export default rootReducer;