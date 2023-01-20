import { graphql } from 'gatsby'
export const query = graphql`
  {
    site {
      siteMetadata {
        repo {
          repoURL
          mainBanch
        }
      }
    }
    fichesWP: allFile(
      filter: {
        sourceInstanceName: { eq: "fiches" }
        childMarkdownRemark: { frontmatter: { toIndex: { eq: true } } }
      }
    ) {
      nodes {
        id
      }
    }
  }
  fragment FileFragment on File {
    childMarkdownRemark {
      excerpt(pruneLength: 100)
      timeToRead
      tableOfContents
      frontmatter {
        title
        typeDocument
        path
        scope
        priority_implementation
        lifecycle
        environmental_impact
      }
    }
  }
`
