import { Layout } from '../components'
import Markdown from 'react-markdown'
import React from 'react'
import { graphql } from 'gatsby'
import remarkGfm from 'remark-gfm'

export default function FichesDisplay({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  console.log('data', data)
  //   return (
  //     <>
  //       <h1>{pageContext.id}</h1>
  //       <h2>{pageContext.remarkID}</h2>
  //     </>
  //   )
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, rawMarkdownBody } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{JSON.stringify(frontmatter)}</h2>
          <Markdown remarkPlugins={[remarkGfm]}>{rawMarkdownBody}</Markdown>
          {/* <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          /> */}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($remarkID: String!, $id: String!) {
    markdownRemark(id: { eq: $remarkID }) {
      html
      rawMarkdownBody
      frontmatter {
        title
      }
    }
    file(id: { eq: $id }) {
      id
    }
  }
`
