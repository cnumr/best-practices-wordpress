/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import Header from './header'
import Licence from './licence'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          repoURL
        }
      }
    }
  `)

  return (
    <>
      <Header
        id="top"
        className=""
        siteTitle={data.site.siteMetadata?.title || `Title`}
        repoURL={data.site.siteMetadata?.repoURL}
      />
      <main className="mx-auto px-4 lg:px-0 lg:max-w-5xl my-8 min-h-[400px]">
        {children}
      </main>
      <footer className="mx-auto px-4 lg:px-0 lg:max-w-5xl">
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a target="_blank" href="https://www.gatsbyjs.com">
          Gatsby
        </a>{' '}
        {` `} by{' '}
        <a target="_blank" href="https://www.greenit.fr">
          CNUMR
        </a>
        <Licence />
      </footer>
      <a
        href="#top"
        className=" sticky bottom-4 right-4 border-2 rounded-full p-4 bg-primary/20 hover:bg-primary/100"
      >
        <span>⬆︎</span>
      </a>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
