import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <h2>
        JEClark.co.uk
        <br />
        <span role='img' aria-label='Lightning bolt emojis'>
          ⚡️⚡️⚡️
        </span>
        <span>Something amazing is coming</span>
        <span role='img' aria-label='Lightning bolt emojis'>
          ⚡️⚡️⚡️
        </span>
      </h2>
    </Layout>
  );
};

export default IndexPage;
