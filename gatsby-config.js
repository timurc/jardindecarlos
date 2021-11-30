module.exports = {
  siteMetadata: {
    title: 'Jardin de Carlos',
    author: 'Timur',
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'https://jardindecarlos.de/',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'https://aufachse.uber.space/graphql',
        includedRoutes: [
          // '/*/*/categories',
          '/*/*/posts',
          '/*/*/pages',
          '/*/*/media',
          // '/*/*/tags',
          // '/*/*/taxonomies',
          '/*/*/users',
        ],
        develop: {
          hardCacheMediaFiles: true
        },
        production: {
          hardCacheMediaFiles: true
        }
      },
    },
  ],
};
