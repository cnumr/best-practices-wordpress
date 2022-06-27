const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allFile(
        filter: {
          extension: { eq: "md" }
          sourceInstanceName: { eq: "personnas" }
        }
      ) {
        nodes {
          relativePath
          childMarkdownRemark {
            frontmatter {
              title
            }
            excerpt
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `GraphQL could not query pages. Create pages aborted.`
    )
    return
  }
  const templatePath = path.resolve(`./src/templates/fiches-display.js`)

  console.log(result.data.allFile)
  result.data.allFile.forEach(node => {
    createPage({
      path: `${node.relativePath}`,
      component: templatePath,
      context: {
        slug: `${node.relativePath}`,
      },
    })
  })
}
