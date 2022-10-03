import { Card, Layout, Seo } from '../components'

import React from 'react'
import { graphql } from 'gatsby'

export default function Home({ data }) {
  return (
    <Layout>
      <Seo
        title="Accueil"
        description="Fiches et Personnas pour rendre WordPress plus respectueux de l'environnement."
      />
      <main className="">
        <h1>{data.site.siteMetadata.title}</h1>
        <nav>
          <ul className="noliststyle flex flex-row gap-4">
            <li className="font-black">Navigation: </li>
            <li>
              <a href="#fiches" title="Aller aux fiches">
                Fiches
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#personnas" title="Aller aux Personnas">
                Personnas
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        <h2 id="fiches">Fiches</h2>
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
        <h2 id="personnas">Personnas</h2>
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
            else return <div>No persona</div>
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
