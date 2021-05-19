import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{pageTitle}</title>
        <meta name='description' content={`${pageTitle} of JEClark.co.uk`} />
      </Helmet>
      <main className={container}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to='/' className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to='/about' className={navLinkText}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </React.Fragment>
  );
};

export default Layout;
