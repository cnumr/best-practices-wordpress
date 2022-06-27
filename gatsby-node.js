const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Fiches WP
  const fiches = await graphql(`
    {
      allFile(
        filter: {
          extension: { eq: "md" }
          sourceInstanceName: { eq: "fiches" }
        }
      ) {
        nodes {
          id
          childMarkdownRemark {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (fiches.errors) {
    reporter.panicOnBuild(
      `GraphQL could not query pages. Create pages aborted.`
    )
    return
  }
  fiches.data.allFile.nodes.forEach(node => {
    const templatePath = path.resolve(`./src/templates/fiches-display.js`)
    createPage({
      path: `fiches/${node.id}`,
      component: templatePath,
      context: {
        id: node.id,
        remarkID: node.childMarkdownRemark.id,
        type: 'fiches',
      },
    })
  })

  // Presonnas
  const personnas = await graphql(`
    {
      allFile(
        filter: {
          extension: { eq: "md" }
          sourceInstanceName: { eq: "personnas" }
        }
      ) {
        nodes {
          id
          childMarkdownRemark {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (personnas.errors) {
    reporter.panicOnBuild(
      `GraphQL could not query pages. Create pages aborted.`
    )
    return
  }
  personnas.data.allFile.nodes.forEach(node => {
    const templatePath = path.resolve(`./src/templates/personnas-display.js`)
    createPage({
      path: `personnas/${node.id}`,
      component: templatePath,
      context: {
        id: node.id,
        remarkID: node.childMarkdownRemark.id,
        type: 'personnas',
      },
    })
  })
}
