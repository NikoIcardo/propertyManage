import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // If you plan to use redux-thunk for async actions
import rootReducer from './reducers'; // Your root reducer

const middleware = [thunk]; // Add any other middleware you may use

const store = createStore(
  rootReducer,
//   applyMiddleware(...middleware)
);

export default store;
