import { LOAD_BOOKS } from '../constants/actionTypes';

const loadBooksSuccess = books => ({ type: LOAD_BOOKS, books });

export function loadBooks() {
  return function (dispatch) {
    return fetch('data/books.json')
      .then(response => response.json())
      .then((data) => {
        dispatch(loadBooksSuccess(data));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}
