const path = require(`path`)
const { execSync } = require('child_process')
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createNodeField } = actions

  // Fiches WP
  const _fiches = await graphql(`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "fiches" }
          childMarkdownRemark: { frontmatter: { toIndex: { eq: true } } }
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
              path
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
    if (node.childMarkdownRemark?.frontmatter.path)
      createPage({
        path: `${node.childMarkdownRemark.frontmatter.path}.md`,
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
  const _personas = await graphql(`
    {
      allFile(
        filter: {
          extension: { eq: "md" }
          sourceInstanceName: { eq: "personas" }
          childMarkdownRemark: { frontmatter: { toIndex: { eq: true } } }
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
              path
            }
          }
        }
      }
    }
  `)

  // if (_personas.errors) {
  //   reporter.panicOnBuild(
  //     `GraphQL could not query pages. Create pages aborted.`
  //   )
  //   return
  // }
  // const personas = _personas.data.allFile.nodes
  // personas.forEach((node, index) => {
  //   const templatePath = path.resolve(`./src/templates/personas-display.js`)
  //   const previousPostId =
  //     index === 0 ? null : personas[index - 1].childMarkdownRemark?.id
  //   const nextPostId =
  //     index === personas.length - 1
  //       ? null
  //       : personas[index + 1].childMarkdownRemark?.id
  //   if (node.childMarkdownRemark?.frontmatter.path)
  //     createPage({
  //       path: `${node.childMarkdownRemark.frontmatter.path}.md`,
  //       component: templatePath,
  //       context: {
  //         id: node.id,
  //         remarkID: node.childMarkdownRemark.id,
  //         type: 'personas',
  //         previousPostId,
  //         nextPostId,
  //       },
  //     })
  // })

  // Lexique
  const _lexique = await graphql(`
    {
      allFile(
        filter: {
          extension: { eq: "md" }
          sourceInstanceName: { eq: "lexique" }
          childMarkdownRemark: { frontmatter: { toIndex: { eq: true } } }
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
              path
            }
          }
        }
      }
    }
  `)

  if (_lexique.errors) {
    reporter.panicOnBuild(
      `GraphQL could not query pages. Create pages aborted.`
    )
    return
  }
  const lexique = _lexique.data.allFile.nodes
  lexique.forEach((node, index) => {
    const templatePath = path.resolve(`./src/templates/personas-display.js`)
    const previousPostId =
      index === 0 ? null : lexique[index - 1].childMarkdownRemark?.id
    const nextPostId =
      index === lexique.length - 1
        ? null
        : lexique[index + 1].childMarkdownRemark?.id
    if (node.childMarkdownRemark?.frontmatter.path)
      createPage({
        path: `${node.childMarkdownRemark.frontmatter.path}.md`,
        component: templatePath,
        context: {
          id: node.id,
          remarkID: node.childMarkdownRemark.id,
          type: 'lexique',
          previousPostId,
          nextPostId,
        },
      })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `File`) {
    const gitUpdateTime = execSync(
      `git log -1 --pretty=format:%aI -- "${node.sourceInstanceName}/${node.relativePath}"`
    ).toString()
    createNodeField(
      {
        node,
        name: 'gitUpdateTime',
        value: gitUpdateTime,
      },
      {
        node,
        name: 'gitUpdateTime',
        value: gitUpdateTime,
      }
    )
    // const value = createFilePath({ node, getNode })
    // createNodeField({
    //   name: `slug`,
    //   node,
    //   value,
    // })
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
    }
    type Frontmatter {
      title: String
      typeDocument: String
      path: String
    }
  `)
}
