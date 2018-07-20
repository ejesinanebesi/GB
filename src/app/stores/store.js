import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

//Все reducers
import {commentsReducer} from '../reducers/commentsReducer';

//++

const middleware = applyMiddleware(promiseMiddleware(), logger());
const reducers = combineReducers({
    comments: commentsReducer
});

//Создаем сам store
const store = createStore(reducers, middleware);

export default store;