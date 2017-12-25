import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

const styles = {border: 'none'};

const AuthorsList = ({ authors, books }) => {
  return (
    <ListGroup>
      {
        authors.map(author => (
          <ListGroupItem key={author.id}>
            <ButtonToolbar style={styles}>
              <DropdownButton id={author.id} bsStyle="default" title={author.name} noCaret style={styles}>
                <MenuItem style={styles}><Link to={`/author/${author.id}`}>Authors Page</Link></MenuItem>
                <MenuItem style={styles} divider />
                {
                  books.map(book => {
                    const bookId = book.id;
                    const bookTitle = book.title;
                    return author.books.indexOf(bookId) !== -1
                      ? <MenuItem key={bookId} style={styles}>
                          <Link to={`/book/${bookId}`}>{bookTitle}</Link>
                        </MenuItem>
                      : null;
                  })
                }
              </DropdownButton>
            </ButtonToolbar>
          </ListGroupItem>
        ))
      }
    </ListGroup>
  );
};

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
};

export default AuthorsList;
