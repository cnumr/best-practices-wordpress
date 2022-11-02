import { Card, Layout, Seo } from '../components'

import React from 'react'
import { graphql } from 'gatsby'

export default function Home({ data, location }) {
  return (
    <Layout>
      <Seo
        title="Personas"
        location={location}
        description="Les personas pour rendre WordPress plus respectueux de l'environnement."
      />
      <main>
        <h1>Personas</h1>
        <ul className="wp-grid">
          {data.personas.nodes.map((persona, index) => {
            if (persona.childMarkdownRemark?.frontmatter.path)
              return (
                <Card
                  key={index}
                  type={Card.PERSONAS}
                  markdownRemark={persona.childMarkdownRemark}
                />
              )
            else return null
          })}
        </ul>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    personas: allFile(
      filter: {
        sourceInstanceName: { eq: "personas" }
        childMarkdownRemark: { frontmatter: { toIndex: { eq: true } } }
      }
      sort: { fields: childrenMarkdownRemark___frontmatter___title, order: ASC }
    ) {
      nodes {
        ...FileFragment
      }
    }
  }
`
