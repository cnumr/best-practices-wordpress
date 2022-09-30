import { Card, Layout, Seo } from '../components'
import { Link, graphql } from 'gatsby'

import React from 'react'

function Lexique({ data }) {
  return (
    <Layout>
      <Seo
        title="Lexique"
        description="Les termes utilisés pour rendre WordPress plus respectueux de l'environnement."
      />
      <main>
        <h1>Lexique</h1>
        <ul className="wp-grid">
          {data.lexiqueEntries.nodes.map((entry, index) => {
            if (entry.childMarkdownRemark?.frontmatter.path)
              return (
                <Card
                  key={index}
                  type={Card.LEXIQUE}
                  markdownRemark={entry.childMarkdownRemark}
                />
              )
          })}
        </ul>
      </main>
    </Layout>
  )
}

export default Lexique

export const query = graphql`
  {
    lexiqueEntries: allFile(
      filter: { extension: { eq: "md" }, sourceInstanceName: { eq: "lexique" } }
      sort: { fields: childrenMarkdownRemark___frontmatter___title, order: ASC }
    ) {
      nodes {
        id
        childMarkdownRemark {
          id
          frontmatter {
            title
            path
          }
          html
        }
      }
    }
  }
`
