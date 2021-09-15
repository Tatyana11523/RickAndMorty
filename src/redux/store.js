import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {pageNumberGet, searchStateGet, searchValueGet} from './reducer';

const reducers = {
  search: searchStateGet,
  pageNumber: pageNumberGet,
  searchString: searchValueGet
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));

export default store;