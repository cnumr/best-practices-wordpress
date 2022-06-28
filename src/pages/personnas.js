import { Card, Layout } from '../components'
import { Link, graphql } from 'gatsby'

import React from 'react'

export default function Home({ data }) {
  return (
    <Layout>
      <main>
        <h1>Personnas</h1>
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
    personnas: allFile(
      filter: { sourceInstanceName: { eq: "personnas" } }
      sort: { fields: childrenMarkdownRemark___frontmatter___title, order: ASC }
    ) {
      nodes {
        ...FileFragment
      }
    }
  }
`
