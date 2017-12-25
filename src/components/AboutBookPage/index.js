import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AboutBookPage = ({ authors, books, pathname }) => {
  const bookId = Number(pathname.split('/')[2]);
  const book = books.filter(book => book.id === bookId)[0];
  const bookAuthor = authors.filter(author => author.books.indexOf(bookId) !== -1)[0];

  return (
    <div>
      <h1>{book.title}</h1>
      <h3><Link to={`/author/${bookAuthor.id}`}>{bookAuthor.name}</Link></h3>
      <h4><Link to={`/genre/${book.genre}`}>{book.genre}</Link></h4>
      <p>{book.description}</p>
    </div>
  );
};

AboutBookPage.propTypes = {
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default AboutBookPage;
