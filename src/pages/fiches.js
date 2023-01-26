import { Card, FiltersBar, Layout, Seo } from '../components'
import React, { useState } from 'react'

import { graphql } from 'gatsby'

export default function Home({ data, location }) {
  const [fichesWP, setFichesWP] = useState(data.fichesWP.nodes)

  const setBackToAllFiches = () => {
    setFichesWP(data.fichesWP.nodes)
  }
  return (
    <Layout>
      <Seo
        title="Fiches"
        location={location}
        description="Les Fiches de Bonnes pratiques pour rendre WordPress plus respectueux de l'environnement."
      />

      <h1>Bonnes pratiques</h1>
      <FiltersBar
        fullList={data.fichesWP.nodes}
        propertiesToMatch={[
          {
            label: 'Lifecycle',
            meta: 'childMarkdownRemark.frontmatter.lifecycle',
          },
          { label: 'Scope', meta: 'childMarkdownRemark.frontmatter.scope' },
          {
            label: 'Environmental Impact',
            meta: 'childMarkdownRemark.frontmatter.environmental_impact',
          },
          {
            label: 'Priority Implementation',
            meta: 'childMarkdownRemark.frontmatter.priority_implementation',
          },
        ]}
        filteredList={setFichesWP}
        resetList={setBackToAllFiches}
        allItemsLabel="Toutes les fiches (RAZ)"
        itemsNotSetLabel="TBD"
        filterType={FiltersBar.SEARCH_TYPE_AND}
        className="my-2 flex flex-row flex-wrap justify-start gap-5"
      />
      <ul className="wp-list">
        {fichesWP.map((fiche, index) => {
          if (fiche.childMarkdownRemark?.frontmatter.path)
            return (
              <Card
                key={index}
                markdownRemark={fiche.childMarkdownRemark}
                type={Card.FICHES}
                display={Card.VERTICAL_LAYOUT}
              />
            )
          else return null
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
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
  }
`
