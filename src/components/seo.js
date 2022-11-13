import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={seo.twitterUsername} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <link rel='mask-icon' href='mask_icon.svg' color='#4176C0'></link>
      {children}
    </>
  );
};
