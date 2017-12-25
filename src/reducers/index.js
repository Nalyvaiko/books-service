import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import books from './booksReducer';
import authors from './authorsReducer';

const rootReducer = combineReducers({
  books,
  authors,
  routing: routerReducer
});

export default rootReducer;
