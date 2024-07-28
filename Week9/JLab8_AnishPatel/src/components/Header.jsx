import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" style={{ display: 'flex', padding: '0', justifyContent: 'space-between', paddingLeft: '16px', backgroundColor: '#000', color: '#fff' }}>
      <h2 className="site-name">
        <Link to="/" style={{ color: '#7b5cea' }}>Trivia</Link>
      </h2>
      <Nav />
    </header>
  );
};

export default Header;
