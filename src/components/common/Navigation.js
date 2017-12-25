import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    color: '#777',
    lineHeight: '20px',
    position: 'relative',
    display: 'block',
    padding: '15px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    textDecoration: 'none'
  },
  active: {color: 'blue'}
};

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
          <NavLink exact to="/" activeStyle={styles.active}>Books</NavLink>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem componentClass="span" style={styles.link}>
        <NavLink to="/authors" activeStyle={styles.active}>Authors</NavLink>
      </NavItem>
      <NavItem componentClass="span" style={styles.link}>
        <NavLink to="/about" activeStyle={styles.active}>About</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
