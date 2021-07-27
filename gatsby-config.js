require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: 'tsuki lab',
    description: 'hanetsukiのポートフォリオサイト'
  },
  plugins: [
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
    `gatsby-plugin-sass`,
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
