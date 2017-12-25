import { LOAD_BOOKS } from '../constants/actionTypes';
import initialState from './initialState';

export default function fuelSavingsReducer(state = initialState.books, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.books;
    default:
      return state;
  }
}
