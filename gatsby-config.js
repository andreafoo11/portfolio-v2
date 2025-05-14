/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/portfolio-v2",
  siteMetadata: {
    title: `website`,
    siteUrl: `https://andreafoo11.github.io/portfolio-v2/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `js-content`,
        path: `${__dirname}/src/content/js`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrea Foo Portfolio`,
        short_name: `Andrea Foo`,
        start_url: `/`,
        background_color: `#151515`,
        theme_color: `#151515`,
        display: `standalone`,
        icon: `src/images/icon.png`, // Path to your icon file
      },
    },
    {
      resolve: `gatsby-plugin-image`,
      options: {
        pathPrefix: "/portfolio-v2",
      },
    },
  ],
};
