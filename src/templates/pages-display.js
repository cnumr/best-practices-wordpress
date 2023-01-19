import { Layout, Seo } from '../components'
import { Link, graphql } from 'gatsby'

import { MDXProvider } from '@mdx-js/react'
import React from 'react'

const MyCTA = props => (
  <div className="text-center mt-12 mb-16">
    <Link {...props} className="btn btn-outline !no-underline" />
  </div>
)

const components = {
  CTA: MyCTA,
}

function PagesDisplay({ data, pageContext, location, children }) {
  const { frontmatter, excerpt } = data.page
  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        location={location}
        description={frontmatter.seoDescription}
      />
      <h1>{frontmatter.title}</h1>
      <div className="markdown-content">
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </Layout>
  )
}

export default PagesDisplay

export const mdxPagesQuery = graphql`
  query ($id: String!) {
    page: mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
      excerpt
    }
  }
`
