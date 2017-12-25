import { LOAD_AUTHORS } from '../constants/actionTypes';

const loadAuthorsSuccess = authors => ({ type: LOAD_AUTHORS, authors });

export function loadAuthors() {
  return function (dispatch) {
    return fetch('data/authors.json')
      .then(response => response.json())
      .then((data) => {
        dispatch(loadAuthorsSuccess(data));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}
