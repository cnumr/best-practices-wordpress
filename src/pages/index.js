import { Layout } from '../components'
import React from 'react'
import { graphql } from 'gatsby'

export default function Home({ data }) {
  return (
    <Layout>
      <div>Hello world!</div>
      <main>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    fichesWP: allFile(
      filter: { extension: { eq: "md" }, sourceInstanceName: { eq: "fiches" } }
    ) {
      nodes {
        relativePath
        childMarkdownRemark {
          frontmatter {
            title
          }
        }
      }
    }
    personnas: allFile(
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
        }
      }
    }
  }
`
