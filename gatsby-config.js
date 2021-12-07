module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-ts-config`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatsby + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_TRACKING_ID,
      }
    }
  ]
};
