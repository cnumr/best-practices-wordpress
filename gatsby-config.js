require(`dotenv`).config()
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const siteURL = process.env.SITE_URL || 'http://localhost:8000'
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Les bonnes pratiques d'écoconception pour WordPress",
    siteUrl: siteURL,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    repo: {
      repoURL: `https://github.com/cnumr/best-practices-wordpress`,
      mainBanch: `main`,
    },
    seoImage: `/logo-cnumr.png`,
    navigation: [
      {
        url: `/fiches`,
        label: `Bonnes pratiques`,
        title: `Voir les bonnes pratiques d'écoconception pour WordPress`,
      },
      {
        url: `/lexique`,
        label: `Lexique`,
        title: `Lexique des termes utilisés`,
      },
      // {
      //   url: `/recherche`,
      //   label: `Rechercher`,
      //   title: `Rechercher une Bonne pratique`,
      // },
    ],
  },
  pathPrefix: '/wp',
  plugins: [
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'fiches',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: 'speed',

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMarkdownRemark (filter: {frontmatter: {toIndex: {eq: true}}}) {
              nodes {
                id
                frontmatter {
                  path
                  title
                }
                rawMarkdownBody
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'body'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['id', 'path', 'title'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            path: `${node.frontmatter.path}.md`,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
          })),
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fiches`,
        path: `${__dirname}/fiches`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personas`,
        path: `${__dirname}/personas`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lexique`,
        path: `${__dirname}/lexique`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              showLineNumbers: false,
            },
          },
          {
            resolve: 'wikilinks-md',
            options: {
              sourceFolder: `${__dirname}/lexique`,
            },
          },
          {
            resolve: 'highlight-md',
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
  ],
}
