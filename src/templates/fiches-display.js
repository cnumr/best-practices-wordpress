import { InternalNav, Layout, MarkdownDisplay, Seo } from '../components'

import React from 'react'
import { graphql } from 'gatsby'

export default function FichesDisplay({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  // console.log('data', data)
  // console.log('pageContext', pageContext)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { previous, next } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.excerpt} />
      <article className="blog-post-container">
        <MarkdownDisplay data={data} pageContext={pageContext} type="fiches" />
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
  query (
    $remarkID: String!
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $remarkID }) {
      html
      rawMarkdownBody
      excerpt
      timeToRead
      tableOfContents
      frontmatter {
        title
        complexity_implementation
        design_phase
        environmental_impact
        family
        people
        priority_implementation
        saved_resources
        state_validation
        targeted_people
      }
    }
    file(id: { eq: $id }) {
      id
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
