module.exports = {
  siteMetadata: {
    title: `<AA />`,
    description: `Portfolio Site v2`,
    author: `AA-DEV`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#002d40`,
        theme_color: `#002d40`,
        display: `minimal-ui`,
        icon: `src/images/laptop-emoji.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
