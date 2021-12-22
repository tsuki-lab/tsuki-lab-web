module.exports = {
  siteMetadata: {
    title: 'tsuki lab',
    description: 'Jamstackが好きなフロントエンドエンジニアのサイト'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'tsuki lab',
        short_name: 'tsuki lab',
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
