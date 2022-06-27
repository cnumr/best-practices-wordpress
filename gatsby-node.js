const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

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
  // console.log('coucou')
  // console.log(fiches.data.allFile.nodes)
  fiches.data.allFile.nodes.forEach(node => {
    const templatePath = path.resolve(`./src/templates/fiches-display.js`)
    const _path = encodeURI(node.childMarkdownRemark.frontmatter.title)
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
}
