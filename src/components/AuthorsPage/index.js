import React from 'react';
import PropTypes from 'prop-types';
import AuthorsList from './AuthorsList';

const AuthorsPage = ({books, authors}) => {
  return (
    <div>
      <h1>Authors list</h1>
      <AuthorsList
        books={books}
        authors={authors}
        />
    </div>
  );
};

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
};

export default AuthorsPage;
