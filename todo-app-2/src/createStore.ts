import { applyMiddleware, combineReducers, createStore as reduxCreateStore } from 'redux';
import logger from 'redux-logger';
import { todoReducer } from './reducers/Todo';


export const createStore = () => {
  const store = reduxCreateStore(
    combineReducers({
      todo: todoReducer,
    }),
    applyMiddleware(
      logger,
    )
  );

  return store;
}