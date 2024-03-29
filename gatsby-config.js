/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'JEClark.co.uk',
    description: 'A simple homepage built with Gatsby',
    twitterUsername: '@jeclark',
    image: '/jeclark_logo.png',
    imageAlt: 'JEClark.co.uk',
    domain: 'jeclark.co.uk',
    siteUrl: 'https://jeclark.co.uk',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `James Clark`,
        short_name: `JEClark`,
        start_url: `/`,
        icon: `src/images/icon.svg`,
        background_color: `#000000`,
        theme_color: `#4176C0`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
  trailingSlash: `always`,
};
