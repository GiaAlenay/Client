import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import {persistStore, persistReducer} from 'redux-persist';
//import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";


const storageConfig = {
    key: 'root',
    storage,
    whitelist: ['Fav', 'UserLoged'] // only navigation will be persisted
  };

const myPersistReducer = persistReducer(storageConfig, rootReducer);

const store = createStore(myPersistReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store) 


export default store;