const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Fiches WP
  const _fiches = await graphql(`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "fiches" } }
        sort: {
          fields: childrenMarkdownRemark___frontmatter___title
          order: ASC
        }
      ) {
        nodes {
          id
          childMarkdownRemark {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (_fiches.errors) {
    reporter.panicOnBuild(
      `GraphQL could not query pages. Create pages aborted.`
    )
    return
  }
  const fiches = _fiches.data.allFile.nodes
  fiches.forEach((node, index) => {
    const templatePath = path.resolve(`./src/templates/fiches-display.js`)
    const previousPostId =
      index === 0 ? null : fiches[index - 1].childMarkdownRemark?.id
    const nextPostId =
      index === fiches.length - 1
        ? null
        : fiches[index + 1].childMarkdownRemark?.id
    if (node.childMarkdownRemark?.fields.slug)
      createPage({
        path: `fiches${node.childMarkdownRemark.fields.slug}`,
        component: templatePath,
        context: {
          id: node.id,
          remarkID: node.childMarkdownRemark.id,
          type: 'fiches',
          previousPostId,
          nextPostId,
        },
      })
  })

  // Presonnas
  const _personnas = await graphql(`
    {
      allFile(
        filter: {
          extension: { eq: "md" }
          sourceInstanceName: { eq: "personnas" }
        }
        sort: {
          fields: childrenMarkdownRemark___frontmatter___title
          order: ASC
        }
      ) {
        nodes {
          id
          childMarkdownRemark {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (_personnas.errors) {
    reporter.panicOnBuild(
      `GraphQL could not query pages. Create pages aborted.`
    )
    return
  }
  const personnas = _personnas.data.allFile.nodes
  personnas.forEach((node, index) => {
    const templatePath = path.resolve(`./src/templates/personnas-display.js`)
    const previousPostId =
      index === 0 ? null : personnas[index - 1].childMarkdownRemark?.id
    const nextPostId =
      index === personnas.length - 1
        ? null
        : personnas[index + 1].childMarkdownRemark?.id
    if (node.childMarkdownRemark?.fields.slug)
      createPage({
        path: `personnas${node.childMarkdownRemark.fields.slug}`,
        component: templatePath,
        context: {
          id: node.id,
          remarkID: node.childMarkdownRemark.id,
          type: 'personnas',
          previousPostId,
          nextPostId,
        },
      })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      typeDocument: String
    }
    type Fields {
      slug: String
    }
  `)
}
