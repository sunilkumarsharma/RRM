
// // import { createStore } from 'redux';
// import { createStore } from 'redux';
// import rootReducer from '../reducers'
// const store =  createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers';
const store = createStore(
  rootReducer
)
export default store;