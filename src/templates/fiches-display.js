import { InternalNav, Layout, Seo } from '../components'
import { Link, graphql } from 'gatsby'

import Markdown from 'react-markdown'
import React from 'react'
import remarkGfm from 'remark-gfm'

export default function FichesDisplay({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  // console.log('data', data)
  // console.log('pageContext', pageContext)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { previous, next } = data
  const { frontmatter, html, rawMarkdownBody } = markdownRemark
  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.excerpt} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>
            <span className="capitalize">{pageContext.type}</span> -{' '}
            {frontmatter.title}
          </h1>
          <p>{JSON.stringify(frontmatter)}</p>
          <Markdown remarkPlugins={[remarkGfm]}>{rawMarkdownBody}</Markdown>
        </div>
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
