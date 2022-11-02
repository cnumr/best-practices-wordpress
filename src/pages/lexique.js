import { Card, Layout, Seo } from '../components'

import React from 'react'
import { graphql } from 'gatsby'

function Lexique({ data, location }) {
  return (
    <Layout>
      <Seo
        title="Lexique"
        location={location}
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
            else return null
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
      filter: {
        extension: { eq: "md" }
        sourceInstanceName: { eq: "lexique" }
        childMarkdownRemark: { frontmatter: { toIndex: { eq: true } } }
      }
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
