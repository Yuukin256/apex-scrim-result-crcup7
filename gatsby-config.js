module.exports = {
  pathPrefix: 'vsaikyo_apex3_scrim_result',
  siteMetadata: {
    title: `第7回CRカップ 練習カスタム試合結果 (非公式)`,
    description: `第7回 Crazy Raccoon Cup Apex Legends Powered by Mildom の事前練習カスタム (スクリム) の試合結果をまとめた非公式サイト`,
    author: `Yuukin256`,
    siteUrl: `https://yuukin256.github.io/apex-scrim-result-crcup7/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.ANALYTICS_TRACKING_ID],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-material-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
