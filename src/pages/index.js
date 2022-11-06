import { Card, Layout, Seo } from '../components'

import React from 'react'
import { graphql } from 'gatsby'

export default function Home({ data, location }) {
  return (
    <Layout>
      <Seo
        title="Accueil"
        location={location}
        description="Fiches et personas pour rendre WordPress plus respectueux de l'environnement."
      />
      <main className="">
        {/* <h1>{data.site.siteMetadata.title}</h1> */}
        {/* <nav>
          <ul className="noliststyle flex flex-row gap-4">
            <li className="font-black">Navigation: </li>
            <li>
              <a href="#bp" title="Aller aux fiches">
                Bonnes Pratiques
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#personas" title="Aller aux Personas">
                Personas
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        <h2 id="bp">Bonnes Pratiques</h2>
        <ul className="wp-grid">
          {data.fichesWP.nodes.map((fiche, index) => {
            if (fiche.childMarkdownRemark?.frontmatter.path)
              return (
                <Card
                  key={index}
                  type={Card.FICHES}
                  markdownRemark={fiche.childMarkdownRemark}
                />
              )
            else return null
          })}
        </ul>
        <h2 id="personas">Personas</h2>
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
            else return <div>No persona</div>
          })}
        </ul> */}
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
      filter: {
        sourceInstanceName: { eq: "fiches" }
        childMarkdownRemark: { frontmatter: { toIndex: { eq: true } } }
      }
      sort: { fields: childrenMarkdownRemark___frontmatter___title, order: ASC }
    ) {
      nodes {
        ...FileFragment
      }
    }
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
  fragment FileFragment on File {
    childMarkdownRemark {
      excerpt(pruneLength: 100)
      timeToRead
      tableOfContents
      frontmatter {
        title
        typeDocument
        path
        scope
        priority_implementation
        lifecycle
        environmental_impact
      }
    }
  }
`
