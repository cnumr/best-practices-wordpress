import { InternalNav, Layout, MarkdownDisplay, Seo } from '../components'

import React from 'react'
import { graphql } from 'gatsby'

export default function PersonnasDisplay({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  // console.log('data', data)
  // console.log('pageContext', pageContext)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { previous, next } = data
  const { frontmatter, excerpt } = markdownRemark
  return (
    <Layout>
      <Seo title={frontmatter.title} description={excerpt} />
      <div className="blog-post-container">
        <MarkdownDisplay
          data={data}
          pageContext={pageContext}
          type="personnas"
        />
        <InternalNav
          className="mt-8"
          pageContext={pageContext}
          next={next}
          previous={previous}
        />
      </div>
    </Layout>
  )
}

export const personnasQuery = graphql`
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
      frontmatter {
        title
      }
    }
    file(id: { eq: $id }) {
      id
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
