import { Layout, Seo } from '../components'
import { Link, graphql } from 'gatsby'

import { MDXProvider } from '@mdx-js/react'
import React from 'react'

function PagesDisplay({ data, pageContext, location, children }) {
  const { frontmatter, excerpt } = data.page

  const MyCTA = props => {
    if (
      props.to?.includes(location.origin) ||
      props.href?.includes(location.origin) ||
      props.to?.startsWith('/') ||
      props.href?.startsWith('/')
    ) {
      return (
        <div className="text-center mt-12 mb-16">
          <a
            href={props.href || props.to}
            className="btn btn-outline !no-underline inline-flex gap-2 items-center"
          >
            <span>{props.label}</span>
            {props.icon && <span>{props.icon}</span>}
          </a>
        </div>
      )
    } else {
      return (
        <div className="text-center mt-12 mb-16">
          <a
            href={props.href || props.to}
            title={`site externe`}
            target={`_blank`}
            rel={`nofollow noopener noreferrer`}
            className="btn btn-outline !no-underline inline-flex gap-2 items-center"
          >
            <span>{props.label}</span>
            {props.icon && <span>{props.icon}</span>}
          </a>
        </div>
      )
    }
  }

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

  const MyHref = props => {
    if (props.href.includes(location.origin)) {
      return <a href={props.href}>{props.children}</a>
    } else {
      return (
        <a
          href={props.href}
          title={`site externe`}
          target={`_blank`}
          rel={`nofollow noopener noreferrer`}
        >
          {props.children}
        </a>
      )
    }
  }
  const components = {
    CTA: MyCTA,
    Contributors: MyContributors,
    Leads: MyLeads,
    Reviewers: MyReviewers,
    NbFiches: MyNbFiches,
    NbLexiques: MyNbLexiques,
    a: MyHref,
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
