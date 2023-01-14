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
        <ul>
          {/* {data.lexiqueEntries.nodes.map((entry, index) => {
            if (entry.childMarkdownRemark?.frontmatter.path)
              return (
                <Card
                  key={index}
                  type={Card.LEXIQUE}
                  markdownRemark={entry.childMarkdownRemark}
                />
              )
            else return null
          })} */}
          {data.lexiqueEntries.nodes.map((entry, index) => {
            if (entry.childMarkdownRemark?.frontmatter.path)
              return (
                <li className="box pb-0 mb-6 border-neutral-transparent">
                  <h2 className="text-neutral-DEFAUT mt-0 mb-4">
                    {entry.childMarkdownRemark?.frontmatter.title}
                  </h2>
                  <div
                    className="markdown-content"
                    dangerouslySetInnerHTML={{
                      __html: entry.childMarkdownRemark?.html,
                    }}
                  />
                </li>
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
      sort: { fields: name, order: ASC }
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
