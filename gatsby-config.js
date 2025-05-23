module.exports = {
  siteMetadata: {
    title: "tsuki lab",
    description: "Jamstackが好きなフロントエンドエンジニアのサイト",
    siteUrl: `https://www.tsuki-lab.net`,
    author: {
      name: "hanetsuki",
      title: "クリエイター",
      message:
        "1995年生まれ・東京都在住。2018年にエンジニアとして働き始め、現在はwebアプリケーションやwebサイト制作などに身を投じています。フロントエンド領域を最も主戦場としており、サービス立ち上げからリリースまでの工程を得意としています。",
    },
    links: [
      {
        name: "Twitter",
        href: "https://twitter.com/hanetsuki_dev",
      },
      {
        name: "GitHub",
        href: "https://github.com/tsuki-lab",
      },
      {
        name: "Zenn",
        href: "https://zenn.dev/rabbit",
      },
      {
        name: "Illust",
        href: "https://art.tsuki-lab.net/",
      },
    ],
    contact: [
      {
        name: "me@tsuki-lab.net",
        href: "mailto:me@tsuki-lab.net",
      },
      {
        name: "Twitter",
        href: "https://twitter.com/hanetsuki_dev",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-minify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "tsuki lab",
        short_name: "tsuki lab",
        start_url: "/",
        background_color: "#f9f9f9",
        theme_color: "#0b6b7c",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.tsuki-lab.net/`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": "src",
        },
        extensions: ["tsx", "ts", "scss"],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_INTEGRATION_TOKEN,
        databaseId: process.env.GATSBY_NOTION_DATABASE_JOB_HISTORY,
      },
    },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_INTEGRATION_TOKEN,
        databaseId: process.env.GATSBY_NOTION_DATABASE_SKILL,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_TRACKING_ID,
      },
    },
  ],
};
