import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        JEClark.co.uk
        <br />
        <span role='img' aria-label='Lightning bolt emojis'>
          ⚡️⚡️⚡️
        </span>
        <span>Something amazing is coming</span>
        <span role='img' aria-label='Lightning bolt emojis'>
          ⚡️⚡️⚡️
        </span>
      </h1>
      <Link to='/about'>About</Link>
    </main>
  );
};

export default IndexPage;
