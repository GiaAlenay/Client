const initialState = {
  Users: [],
  Posts: [],
  userEliminado: [],
  Categories: [],
  User: {},
  mensajeResultado: "",
  UserLoged: {},
  loading: false,
  Fav: [],
  allPosts: [],
  userInactivo: [],
  filtrosAplicados: [],
  filtrosAplicadosPremium: "",
  
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //Actions USERS
    case "GET_USERS":
      return {
        ...state,
        Users: action.payload,
        loading: false,
      };

    case "GET_USER_BY_ID":
      return {
        ...state,
        mensajeResultado: action.payload.msg,
        User: action.payload.user,
        loading: false,
      };

    case "DELETE_USER":
      return {
        ...state,
        mensajeResultado: action.payload.msg,
        loading: false,
      };

    case "CREATE_USER":
      return {
        ...state,
        mensajeResultado: action.payload.msg,
        UserLoged: action.payload.user,
        loading: false,
      };

    case "GET_USER_LOGED":
      return {
        ...state,
        mensajeResultado: action.payload.msg,
        UserLoged: action.payload.user,
        loading: false,
      };

    case "EDIT_USER":
      return {
        ...state,
        mensajeResultado: action.payload.msg,
        UserLoged: action.payload.user,
        loading: false,
      };
    //Actions POSTS
    case "GET_POSTS":
      return {
        ...state,
        Posts: action.payload,
        allPosts: action.payload,
        loading: false,
      };
    case "CREATE_POST":
      return {
        ...state,
        Posts: [action.payload.post, ...state.Posts],
        loading: false,
      };

    case "DELETE_POST":
      // const allposteos = state.allPosts
      // const filter = allposteos.filter(el => el.id !== action.payload.buscarid.id)
      return {
        ...state,
      };

    //EXTRA
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    //User Eliminado
    case "ELIMINAR_USER":
      return {
        ...state,
        userEliminado: action.payload,
      };

    case "GET_INACTIVE_USER":
      return {
        ...state,
        usuarioInactivo: action.payload,
      };
    //Actions CATEGORIES
    case "GET_CATEGORIES":
      return {
        ...state,
        Categories: action.payload,
      };

    case "FILTER_CATEGORIES":
      const traerposts = state.Posts; //cambia
      const todos = state.allPosts; //no cambia, solo lo uso

      const filtrar = todos.filter(({ categories }) =>
        categories.find(({ name }) => action.payload.includes(name))
      );

      return {
        ...state,
        Posts: action.payload.length ? [...filtrar] : todos,
        filtrosAplicados: [...action.payload],
      };

    case "FILTER_PARA_PREMIUM":
      const todosP = state.allPosts;
      const lospost = state.Posts;
      const aplicados = state.filtrosAplicados;
      const filtrarP = todosP.filter(({ categories }) =>
        categories.find(({ name }) => aplicados.includes(name))
      );
      const postFiltradosPremium =
        state.filtrosAplicadosPremium !== action.payload ? filtrarP : lospost;

      const filtroNivel = postFiltradosPremium.filter((p) => {
        if (p.premium === action.payload) {
          return p;
        }
      });
      return {
        ...state,
        Posts: [...filtroNivel],
        filtrosAplicadosPremium: action.payload,
      };
      ///REPORT POSTS
      case "POST_REPORT_EMAIL":
      return{
        ...state,
      }
      //Actions Favoritos
    case "CREATE_FAV":
       const item = action.payload;
       //const id = state.Fav.find(x => x.item); 
       if (state.Fav.find(e => e === item)) {
         return {
           ...state,
             Fav: state.Fav
           }
       }else{
      return {
       ...state,
        Fav: [...state.Fav,  item] }}


      case "DELETE_FAV":
        const del = action.payload
        const favoritos = state.Fav;
        const filtro = favoritos.filter((fav) => fav !== del);  
        return {
          ...state,
          Fav: filtro
        };

    case "EDIT_POST":
      return {
        ...state,
      };
    case "ORDER_LIKES":
      let allPost = state.Posts;
      let orderRating =
        action.payload === "Menos"
          ? allPost.sort(function (a, b) {
              if (a.likes.length > b.likes.length) {
                return 1;
              }
              if (a.likes.length < b.likes.length) {
                return -1;
              }
              return 0;
            })
          : allPost.sort(function (a, b) {
              if (a.likes.length > b.likes.length) {
                return -1;
              }
              if (a.likes.length < b.likes.length) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        Posts: orderRating,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
