module.exports = {
 siteMetadata: {
  title: "My working Blog",
  description: "My blog is built with Gatsby and MDX",
  url: "www.subeidaahmed.com/blog",
  image: "/background.png",
  twitterUsername: "@Subeida_hq",
  author: "Subeida",

 },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,

      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,     
       },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,

            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options:{
        fonts: [
          `limelight`,
          `Muli\:300,400,400i,700`
        ],
        display: 'swap',
      },
    },
  ],
}
