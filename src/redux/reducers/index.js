const initialState = {
  Users: [],
  Posts: [],
  User:{},
  mensajeResultado:'',
  UserLoged:{},
  loading: false,
  coments:[],
  comentsOnComent:[],
  abrirHilo:false,
  mainComentHilo:{},
  reaccionesOnComents:[],
  searchResponse:{},
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

    case 'GET_USER_LOGED':
      return{
        ...state,
        mensajeResultado:action.payload.msg,
        UserLoged:action.payload.user,
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
    case "GET_COMENT_ON_pOST":
      return{
        ...state,
        loading: false,
        coments:action.payload
      }
    case "GET_REACCION_ON_pOST":
      return{
        ...state,
        reaccionesOnPost:action.payload
      }
    case "CREATE_REACCION_ON_POST":
      return{
        ...state
      }
    case "CREATE_REACCION_ON_COMENT":
      return{
        ...state
      }
    case "DELETE_REACCION":
      return{
        ...state
      }
    case "EDIT_REACCION_ON_POST":
      return{
        ...state
      }
    case "ABRIR_HILO":
      return{
        ...state,
        abrirHilo:action.payload
      }
    case "GET_HILO_AUTH":
      return{
        ...state,
        mainComentHilo:action.payload
      }
    case "GET_COMENT_ON_COMENTS":
      return{
        ...state,
        loading: false,
        comentsOnComent:action.payload

      }
    case "DELETE_COMENT":
      return{
        ...state,
        loading:false,

      }
      case "EDIT_COMENT":
        return{
          ...state,
          loading:false,
          
        }
      case "SEARCH_GLOBAL":
        return{
          ...state,
          loading:false,
          searchResponse:action.payload
        }
    //DEFAULT
    default:
      return {
        ...state
      };
  }
}
  
export default rootReducer;