import React from 'react';
import Layout from '../components/layout';
import { Seo } from '../components/seo';

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>My name is James.</p>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <Seo title='About Me' />;
