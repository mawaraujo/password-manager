import { combineReducers, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { notificationReducer } from '../reducers/notifications.reducer';
import { passwordReducer } from '../reducers/passwords.reducer';
import { searchReducer } from '../reducers/search.reducer';
import { tagReducer } from '../reducers/tags.reducer';

declare global {
  interface Window { // eslint-disable-line no-unused-vars
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['tags', 'passwords'],
};

const reducers = combineReducers({
  passwords: passwordReducer,
  tags: tagReducer,
  notifications: notificationReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);


export function configureStore() {
  // https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
  const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store: any = createStore(persistedReducer, compose(composeEnhancers()));
  const persistor = persistStore(store);

  return { store, persistor };
}
