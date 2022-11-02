import { Card, Layout, Seo } from '../components'

import React from 'react'
import { graphql } from 'gatsby'

export default function Home({ data, location }) {
  return (
    <Layout>
      <Seo
        title="Personnas"
        location={location}
        description="Les Personnas pour rendre WordPress plus respectueux de l'environnement."
      />
      <main>
        <h1>Personnas</h1>
        <ul className="wp-grid">
          {data.personnas.nodes.map((personna, index) => {
            if (personna.childMarkdownRemark?.frontmatter.path)
              return (
                <Card
                  key={index}
                  type={Card.PERSONNAS}
                  markdownRemark={personna.childMarkdownRemark}
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
    personnas: allFile(
      filter: {
        sourceInstanceName: { eq: "personnas" }
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
