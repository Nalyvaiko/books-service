import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BooksList from '../BooksPage/BooksList';

const GenrePage = ({ authors, books, pathname }) => {
  const genre = pathname.split('/')[2];
  const genreBooks = books.filter(book => book.genre === genre);

  return (
    <div>
      <h1>Books genre {genre}</h1>
      <BooksList
        books={genreBooks}
        authors={authors}
        />
      <Link to="/"> Go back to homepage</Link>
    </div>
  );
};

GenrePage.propTypes = {
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default GenrePage;
