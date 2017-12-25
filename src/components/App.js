/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBooks } from '../actions/booksActions';
import { loadAuthors } from '../actions/authorsActions';

import BooksPage from './BooksPage';
import AuthorsPage from './AuthorsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import Navigation from './common/Navigation';
import AboutAuthorPage from './AboutAuthorPage';
import AboutBookPage from './AboutBookPage';
import GenrePage from './GenrePage';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadBooks();
    this.props.loadAuthors();
  }

  render() {
    const {books, authors, pathname} = this.props;

    return (
      <div>
        <Navigation />
        <Switch>
          <Route
            exact path="/"
            render={() => (<BooksPage books={books} authors={authors}/>)} />
          <Route
            path="/authors"
            render={() => (<AuthorsPage books={books} authors={authors}/>)} />
          <Route
            path="/book/:id"
            render={() => (<AboutBookPage books={books} authors={authors} pathname={pathname}/>)} />
          <Route
            path="/author/:id"
            render={() => (<AboutAuthorPage books={books} authors={authors} pathname={pathname}/>)} />
          <Route
            path="/genre/:name"
            render={() => (<GenrePage books={books} authors={authors} pathname={pathname}/>)} />
          <Route
            path="/about"
            component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  books: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  loadBooks: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
    authors: state.authors,
    pathname: state.routing.location.pathname
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadBooks: bindActionCreators(loadBooks, dispatch),
    loadAuthors: bindActionCreators(loadAuthors, dispatch),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
