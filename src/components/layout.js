import React from 'react';
import { Link } from 'gatsby';
import { container, heading } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Layout;
