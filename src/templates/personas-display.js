import {
  ContributeCTA,
  InternalNav,
  Layout,
  MarkdownDisplay,
  Seo,
} from '../components'

import React from 'react'
import { graphql } from 'gatsby'

export default function PersonasDisplay({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
  location,
}) {
  // console.log('data', data)
  // console.log('pageContext', pageContext)
  const {
    personna,
    personna: { sourceInstanceName, relativePath },
    previous,
    next,
  } = data // data.markdownRemark holds your post data
  const { frontmatter, excerpt } = personna.markdownRemark
  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        location={location}
        description={excerpt}
      />
      <div className="blog-post-container">
        <MarkdownDisplay
          data={personna}
          pageContext={pageContext}
          type="personas"
        />
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
      </div>
    </Layout>
  )
}

export const personasQuery = graphql`
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
    personna: file(id: { eq: $id }) {
      relativePath
      sourceInstanceName
      fields {
        gitUpdateTime
      }
      markdownRemark: childMarkdownRemark {
        html
        rawMarkdownBody
        excerpt
        timeToRead
        frontmatter {
          title
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
