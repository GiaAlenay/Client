const initialState = {
  Users: [],
  Posts: [],
  User:{},
  mensajeResultado:'',
  UserLoged:{},
  loading: false,
  //************ */
  userEliminado:[],

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    //Actions USERS
    case 'GET_USERS':
      return {
        ...state,
        Users: action.payload,
        loading: false
      };

    case 'GET_USER_BY_ID':
      return{
        ...state,
        mensajeResultado:action.payload.msg,
        User:action.payload.user,
        loading: false
      };

    case 'DELETE_USER':
      return{
        ...state,
        mensajeResultado:action.payload.msg,
        loading: false
      };

    case 'CREATE_USER':
      return{
        ...state,
        mensajeResultado:action.payload.msg,
        UserLoged: action.payload.user,
        loading: false
      };

    case 'EDIT_USER':
      return{
        ...state,
        mensajeResultado:action.payload.msg,
        UserLoged:action.payload.user,
        loading: false
      };
    
    //Actions POSTS
    case "GET_POSTS":
      return{
        ...state,
        Posts:action.payload,
        loading: false
      };

    case "CREATE_POST":
      return{
        ...state,
        loading: false
      };

    //EXTRA
    case "LOADING":
      return{
        ...state,
        loading: true
      };

    //User Eliminado
      case "ELIMINAR_USER":
        return {
          ...state,
          userEliminado:action.payload,    
        }
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