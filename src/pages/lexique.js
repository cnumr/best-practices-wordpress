import { Layout, Seo } from '../components'

import React from 'react'
import { graphql } from 'gatsby'

function Lexique({ data, location }) {
  console.log('data.lexiqueEntries.nodes :>> ', data.lexiqueEntries.nodes)

  const byGroup = data.lexiqueEntries.nodes.reduce((r, a) => {
    r[a.name.slice(0, 1)] = [...(r[a.name.slice(0, 1)] || []), a]
    return r
  }, [])

  return (
    <Layout>
      <Seo
        title="Lexique"
        location={location}
        description="Les termes utilisés pour rendre WordPress plus respectueux de l'environnement."
      />

      <h1>Lexique</h1>
      <ul className="flex gap-2 flex-wrap items-start mb-2">
        {Object.keys(byGroup).map((entry, index) => {
          return (
            <li
              key={`button-${index}-${entry}`}
              className="list-none whitespace-nowrap m-0 leading-none mb-4"
            >
              <a
                href={`#${entry}`}
                className="badge text-sm transition hover:bg-primary-transparent text-neutral-DEFAUT no-underline"
              >
                {entry}
              </a>
            </li>
          )
        })}
      </ul>
      <ul>
        {Object.entries(byGroup).map((entry, index) => {
          console.log('entry[0] :>> ', entry[0])
          return (
            <li key={`lexique-${index}-${entry[0]}`}>
              <ul id={`${entry[0]}`}>
                {entry[1].map(({ childMarkdownRemark }, index) => {
                  if (childMarkdownRemark.frontmatter.path)
                    return (
                      <li
                        className="box pb-0 mb-6 border-neutral-transparent"
                        key={`${index}-${childMarkdownRemark?.frontmatter.path}`}
                      >
                        <h2 className="text-neutral-DEFAUT mt-0 mb-4">
                          {childMarkdownRemark?.frontmatter.title}
                        </h2>
                        <div
                          className="markdown-content"
                          dangerouslySetInnerHTML={{
                            __html: childMarkdownRemark?.html,
                          }}
                        />
                      </li>
                    )
                  else return null
                })}
              </ul>
            </li>
          )
        })}
      </ul>
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
        name
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
