import { LOAD_AUTHORS } from '../constants/actionTypes';
import initialState from './initialState';

export default function fuelSavingsReducer(state = initialState.authors, action) {
  switch (action.type) {
    case LOAD_AUTHORS:
      return action.authors;
    default:
      return state;
  }
}
