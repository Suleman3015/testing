module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/home`,
        name: 'home'
      }
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-postcss'
  ],

}
