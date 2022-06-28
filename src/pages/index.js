import { Card, Layout } from '../components'
import { Link, graphql } from 'gatsby'

import React from 'react'

export default function Home({ data }) {
  return (
    <Layout>
      <main>
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>Fiches</h2>
        <ul className="noliststyle grid grid-cols-3 gap-2">
          {data.fichesWP.nodes.map((fiche, index) => {
            if (fiche.childMarkdownRemark?.fields.slug)
              return (
                <Card key={index} markdownRemark={fiche.childMarkdownRemark} />
              )
          })}
        </ul>
        <h2>Personnas</h2>
        <ul className="noliststyle grid grid-cols-3 gap-2">
          {data.personnas.nodes.map((personna, index) => {
            if (personna.childMarkdownRemark?.fields.slug)
              return (
                <Card
                  key={index}
                  markdownRemark={personna.childMarkdownRemark}
                />
              )
          })}
        </ul>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    fichesWP: allFile(
      filter: { sourceInstanceName: { eq: "fiches" } }
      sort: { fields: childrenMarkdownRemark___frontmatter___title, order: ASC }
    ) {
      nodes {
        ...FileFragment
      }
    }
    personnas: allFile(
      filter: { sourceInstanceName: { eq: "personnas" } }
      sort: { fields: childrenMarkdownRemark___frontmatter___title, order: ASC }
    ) {
      nodes {
        ...FileFragment
      }
    }
  }
  fragment FileFragment on File {
    childMarkdownRemark {
      excerpt(pruneLength: 100)
      fields {
        slug
      }
      frontmatter {
        title
        typeDocument
      }
    }
  }
`
