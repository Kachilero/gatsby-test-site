module.exports = {
  siteMetadata: {
    title: "Gatsby Bootcamp",
    author: 'Alejandro Cerro',
    description: "A site to explore GatsbyJS and GraphQL",
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
