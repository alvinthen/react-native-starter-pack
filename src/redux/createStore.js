// @flow
import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { createLogger } from 'redux-logger';

import reducers, { persistentBlacklist } from './modules';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

export default function configureStore(onComplete: () => any) {
  const enhancer = compose(autoRehydrate(), applyMiddleware(thunk, reduxPackMiddleware, logger));
  const store = createStore(reducers, enhancer);
  persistStore(store, { storage: AsyncStorage, blacklist: persistentBlacklist }, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}
