import { Link, graphql } from 'gatsby'

import { Layout } from '../components'
import React from 'react'

export default function Home({ data }) {
  return (
    <Layout>
      <div>Hello world!</div>
      <main>
        <h2>Fiches</h2>
        <ul>
          {data.fichesWP.nodes.map((fiche, index) => {
            return (
              <li key={index}>
                <Link to={`fiches/${fiche.id}`}>
                  {fiche.childMarkdownRemark.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <h2>Personnas</h2>
        <ul>
          {data.personnas.nodes.map((personnas, index) => {
            return (
              <li key={index}>
                <Link to={`personnas/${personnas.id}`}>
                  {personnas.childMarkdownRemark.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
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
        id
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
        id
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
