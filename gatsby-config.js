module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatsby + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/icon.png'
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/data/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_TRACKING_ID,
      }
    },
  ]
};
