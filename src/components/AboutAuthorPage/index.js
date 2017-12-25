import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AboutAuthorPage = ({ authors, books, pathname }) => {
  const authorId = Number(pathname.split('/')[2]);
  const author = authors.filter(author => author.id === authorId)[0];
  const authorBooks = books.filter(book => author.books.indexOf(book.id) !== -1);

  return (
    <div>
      <h1>{author.name}</h1>
      <p>{author.biography}</p>
      <h3>Available authors books in cataloge:</h3>
      <ul>
        {
          authorBooks.map(book => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`}>{book.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

AboutAuthorPage.propTypes = {
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default AboutAuthorPage;
