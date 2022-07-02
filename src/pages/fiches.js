import { Card, Layout, SearchButtons, Seo } from '../components'
import { Link, graphql } from 'gatsby'
import React, { useState } from 'react'

export default function Home({ data }) {
  const [fichesWP, setFichesWP] = useState(data.fichesWP.nodes)

  const setBackToAllFiches = () => {
    setFichesWP(data.fichesWP.nodes)
  }
  return (
    <Layout>
      <Seo
        title="Fiches"
        description="Les Fiches de Bonnes pratiques pour rendre WordPress plus respectueux de l'environnement."
      />
      <main>
        <h1>Fiches</h1>
        <SearchButtons
          fullList={data.fichesWP.nodes}
          propertyToMatch="childMarkdownRemark.frontmatter.family"
          setList={setFichesWP}
          setBackToAllItems={setBackToAllFiches}
          allItemsLabel="Toutes les fiches"
          itemsNotSetLabel="TBD"
          className="my-8 flex flex-row flex-wrap justify-between gap-5"
        />
        <ul className="wp-grid">
          {fichesWP.map((fiche, index) => {
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
