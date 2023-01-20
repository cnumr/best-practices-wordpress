import { Layout, Seo } from '../components'
import { Link, graphql } from 'gatsby'

import { MDXProvider } from '@mdx-js/react'
import React from 'react'

function PagesDisplay({ data, pageContext, location, children }) {
  const { frontmatter, excerpt } = data.page

  const MyCTA = props => (
    <div className="text-center mt-12 mb-16">
      <Link
        {...props}
        className="btn btn-outline !no-underline inline-flex gap-2 items-center"
      >
        <span>{props.children}</span>
        {props.icon && <span>{props.icon}</span>}
      </Link>
    </div>
  )

  const peopleList = (props, pList) => {
    return pList.map((people, index) => {
      if (people.url) {
        return (
          <span {...props} key={index}>
            <a href={people.url} target={`_blank`}>
              {people.name}
            </a>
            {index === pList.length - 1 ? `.` : `, `}
          </span>
        )
      } else {
        return (
          <span {...props} key={index}>
            {people.name}
            {index === pList.length - 1 ? `.` : `, `}
          </span>
        )
      }
    })
  }

  const MyContributors = props =>
    peopleList(props, data.site.siteMetadata?.peoples?.contributors)
  const MyLeads = props =>
    peopleList(props, data.site.siteMetadata?.peoples?.leads)
  const MyReviewers = props =>
    peopleList(props, data.site.siteMetadata?.peoples?.reviewers)

  const MyNbFiches = props => (
    <span {...props}>{data.fichesNUM.totalCount}</span>
  )

  const MyNbLexiques = props => (
    <span {...props}>{data.lexiqueNUM.totalCount}</span>
  )
  const components = {
    CTA: MyCTA,
    Contributors: MyContributors,
    Leads: MyLeads,
    Reviewers: MyReviewers,
    NbFiches: MyNbFiches,
    NbLexiques: MyNbLexiques,
  }
  return (
    <Layout>
      <Seo
        title={frontmatter.seoTitle || frontmatter.title}
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
        seoDescription
        seoTitle
      }
      body
      excerpt
    }
    site {
      siteMetadata {
        peoples {
          leads {
            name
            url
          }
          reviewers {
            name
            url
          }
          contributors {
            name
            url
          }
        }
      }
    }
    fichesNUM: allFile(
      filter: {
        sourceInstanceName: { eq: "fiches" }
        childMarkdownRemark: { frontmatter: { toIndex: { eq: true } } }
      }
    ) {
      totalCount
    }
    lexiqueNUM: allFile(
      filter: {
        sourceInstanceName: { eq: "lexique" }
        childMarkdownRemark: { frontmatter: { toIndex: { eq: true } } }
      }
    ) {
      totalCount
    }
  }
`
