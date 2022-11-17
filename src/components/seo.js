import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    imageAlt,
    domain,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    imageAlt,
    domain,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:image:alt' content={seo.imageAlt} />
      <meta property='og:locale' content='en_GB' />
      <meta property='og:site_name' content='JEClark.co.uk' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={seo.twitterUsername} />
      <meta name='twitter:domain' content={seo.domain} />
      <link rel='mask-icon' href='mask_icon.svg' color='#4176C0'></link>
      {children}
    </>
  );
};
