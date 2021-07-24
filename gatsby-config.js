module.exports = {
  siteMetadata: {
    title: 'tsuki lab'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'tsuki lab',
        short_name: 'tsuki lab',
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
