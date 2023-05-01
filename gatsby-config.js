/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Shelter in Place",
    titleTemplate: "%s",
    description: "This Site Is Meant To Encourage Believers In God’s Word, And To Persuade Seekers Of The Truth To Explore The Pages Of The Word. Signs Of The Times Focuses On The World We Live In, The Evil That Is Afoot, The Deceptions That Go Unnoticed By Most, The Contending Spiritual Battles That Are Emerging, Also Unnoticed By Most, All In Light Of Biblical Prophecy. The Word Is A Tribute To The Word Of God, Jesus Christ, Yeshua Hamashiach – The Richness And The Sheer Wonder Of Our Holy God His Word To Us In Parables, Illustrations, Exhortations, And The Living Word.",
    url: "https://www.shelterinplace3.ca", // No trailing slash allowed!
    siteUrl: "https://www.shelterinplace3.ca",
    image: "/logo-light.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        /**
         * @property {boolean} [isBaseProvider=false]
         * if true, will render `<ChakraBaseProvider>`
         */
        isBaseProvider: false,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://www.wp-content.shelterinplace3.ca/graphql",
      },
    },
  ],
}
