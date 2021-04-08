import thunk from 'redux-thunk';
// import logger from "redux-logger";
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import people from './reducers/people';

const middleware = [thunk];
let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
    // middleware.push(logger); // uncomment to see logs
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default createStore(
    combineReducers({
      people,
    }),
    composeEnhancers(
        applyMiddleware(...middleware),
    ),
);