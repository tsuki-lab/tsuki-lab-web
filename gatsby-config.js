const path = require('path');

require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: 'tsuki lab',
    description: 'hanetsukiのポートフォリオサイト'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '@': path.join(__dirname, 'src')
      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'tsukiLab',
        short_name: 'tsukiLab',
        start_url: '/',
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://zenn.dev/rabbit/feed`,
        name: `ZennPost`
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://qiita.com/tsuki-lab/feed`,
        name: `QiitaPost`
      }
    }
  ]
};
