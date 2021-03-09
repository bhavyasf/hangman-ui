import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import gameReducer from './reducers/game';

export const sagas = createSagaMiddleware();

export default createStore(combineReducers({gameReducer , routerReducer}), applyMiddleware(sagas));

