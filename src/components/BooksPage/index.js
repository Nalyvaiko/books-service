import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BooksList from './BooksList';

const BooksPage = ({books, authors}) => {
  return (
    <div>
      <h1>Books Catalog</h1>
      <BooksList
        books={books}
        authors={authors}
        />
      <h3>Review the <Link to="/authors">authors</Link></h3>
    </div>
  );
};

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
};

export default BooksPage;
