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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'aufachse.uber.space',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        perPage: 100,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: 'https://source-url.com',
        //   replacementUrl: 'https://replacement-url.com',
        // },
        concurrentRequests: 10,
        includedRoutes: [
          // '/*/*/categories',
          '/*/*/posts',
          '/*/*/pages',
          '/*/*/media',
          // '/*/*/tags',
          // '/*/*/taxonomies',
          '/*/*/users',
        ],
      },
    },
  ],
};
