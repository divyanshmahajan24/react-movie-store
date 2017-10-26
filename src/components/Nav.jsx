import React from 'react';
import { Link } from 'react-router-dom'
const Nav = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/movies'>Movies</Link></li>
        <li><Link to='/roster'>TV Series</Link></li>
      </ul>
    </nav>
  </header>
)
export default Nav;
