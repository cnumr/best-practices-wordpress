import { Card, Layout } from '../components'
import { Link, graphql } from 'gatsby'

import React from 'react'

export default function Home({ data }) {
  console.log('tableOfContents', data)
  return (
    <Layout>
      <main>
        <h1>Fiches</h1>
        <ul className="noliststyle grid grid-cols-3 gap-2">
          {data.fichesWP.nodes.map((fiche, index) => {
            if (fiche.childMarkdownRemark?.fields.slug)
              return (
                <Card
                  key={index}
                  markdownRemark={fiche.childMarkdownRemark}
                  type="fiches"
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
