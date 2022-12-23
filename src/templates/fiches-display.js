import {
  ContributeCTA,
  InternalNav,
  Layout,
  MarkdownDisplay,
  Seo,
} from '../components'

import React from 'react'
import { graphql } from 'gatsby'

export default function FichesDisplay({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
  location,
}) {
  console.log('data', data)
  // console.log('pageContext', pageContext)
  const {
    fiche,
    fiche: { sourceInstanceName, relativePath },
    previous,
    next,
  } = data // data.markdownRemark holds your post data
  const { frontmatter, excerpt } = fiche.markdownRemark
  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        location={location}
        description={excerpt}
      />
      <article className="blog-post-container">
        <MarkdownDisplay data={fiche} pageContext={pageContext} type="fiches" />
        <ContributeCTA
          relativePath={relativePath}
          sourceInstanceName={sourceInstanceName}
        />
        <InternalNav
          className="mt-8"
          pageContext={pageContext}
          next={next}
          previous={previous}
        />
      </article>
    </Layout>
  )
}

export const ficheQuery = graphql`
  query ($id: String!, $previousPostId: String, $nextPostId: String) {
    fiche: file(id: { eq: $id }) {
      relativePath
      sourceInstanceName
      markdownRemark: childMarkdownRemark {
        html
        rawMarkdownBody
        excerpt
        timeToRead
        tableOfContents
        frontmatter {
          title
          lifecycle
          environmental_impact
          scope
          people
          priority_implementation
          saved_resources
          responsible
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        title
        path
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        title
        path
      }
    }
  }
`
