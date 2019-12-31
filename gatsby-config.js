/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `The Downtown Band`,
    description: `Live band available for corporate events, private parties, & weddings.`,
    author: `@embrycode`,
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'songs',
        link: '/songs',
      },
      {
        name: 'packages',
        link: '/packages',
      },
      {
        name: 'videos',
        link: '/videos',
      },
      {
        name: 'contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-downtown-band`,
        short_name: `dtb`,
        start_url: `/`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // Custom
    'gatsby-plugin-typescript',
    'gatsby-plugin-theme-ui',
  ],
}
