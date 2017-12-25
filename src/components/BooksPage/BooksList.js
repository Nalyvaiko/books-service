import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const styles = {
  display: 'block',
  marginBottom: '.3em',
  fontSize: '1.4em'
};

const BooksList = ({books, authors}) => (
  <ListGroup>
    {
      books.map(book => (
        <ListGroupItem key={book.id}>
          <Link
            style={styles}
            to={`/book/${book.id}`}>
            {book.title}
          </Link>
          <Link
            to={`/author/${book.authorId}`}>
            {
              authors.map(author => author.id === book.authorId
                ? author.name
                : null)
            }
          </Link>
        </ListGroupItem>
      ))
    }
  </ListGroup>
);

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
};

export default BooksList;
