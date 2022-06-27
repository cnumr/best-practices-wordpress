import { Layout, Seo } from '../components'

import Markdown from 'react-markdown'
import React from 'react'
import { graphql } from 'gatsby'
import remarkGfm from 'remark-gfm'

export default function PersonnasDisplay({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
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
          <h2>{JSON.stringify(frontmatter)}</h2>
          <Markdown remarkPlugins={[remarkGfm]}>{rawMarkdownBody}</Markdown>
        </div>
      </div>
    </Layout>
  )
}

export const personnasQuery = graphql`
  query ($remarkID: String!, $id: String!) {
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
  }
`
