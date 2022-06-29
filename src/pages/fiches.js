import { Card, Layout } from '../components'
import { Link, graphql } from 'gatsby'

import React from 'react'

export default function Home({ data }) {
  console.log('tableOfContents', data)
  return (
    <Layout>
      <main>
        <h1>Fiches</h1>
        <ul className="wp-grid">
          {data.fichesWP.nodes.map((fiche, index) => {
            if (fiche.childMarkdownRemark?.frontmatter.path)
              return (
                <Card
                  key={index}
                  markdownRemark={fiche.childMarkdownRemark}
                  type={Card.FICHES}
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
    fichesWP: allFile(
      filter: { sourceInstanceName: { eq: "fiches" } }
      sort: { fields: childrenMarkdownRemark___frontmatter___title, order: ASC }
    ) {
      nodes {
        ...FileFragment
      }
    }
  }
`
