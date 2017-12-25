import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/about-page.css';

const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        This example app is a test task <a href="https://github.com/Nalyvaiko/books-service" target="_blank">Vitalii Nalyvaiko</a>.
      </p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default AboutPage;
