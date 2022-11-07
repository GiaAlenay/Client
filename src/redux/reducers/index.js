const initialState = {
  Users: [],
  Posts: [],
  Categories: [],
  User: {},
  mensajeResultado: "",
  UserLoged: {},
  loading: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //Actions USERS
    case "GET_USERS":
      return {
        ...state,
        Users: action.payload,
        loading: false
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
        loading: false,
      };

    case "CREATE_POST":
      return {
        ...state,
        loading: false
      };

    //EXTRA
    case "LOADING":
      return{
        ...state,
        loading: true
      };
    //Actions CATEGORIES
    case "GET_CATEGORIES":
      return {
        ...state,
        Categories: action.payload,
      };

    case "FILTER_CATEGORIES":
      const traerposts = state.Posts;
      const categoriesFilter = traerposts.filter((c) => {
        for (let i = 0; i < c.categories.length; i++) {
          if (c.categories[i].name === action.payload) {
            return c;
          }
        }
      });
      return {
        ...state,
        Posts: [...categoriesFilter],
      };

    //DEFAULT
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
