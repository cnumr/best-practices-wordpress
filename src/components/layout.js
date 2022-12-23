/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'

import { graphql, useStaticQuery, Link } from 'gatsby'

import Header from './header'
import Licence from './licence'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          repo {
            repoURL
          }
          navigation {
            label
            title
            url
          }
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
        repoURL={data.site.siteMetadata?.repo?.repoURL}
        navigation={data.site.siteMetadata?.navigation}
      />
      <main className="mx-auto px-4 lg:px-0 lg:max-w-5xl my-8 min-h-[400px]">
        {children}
      </main>
      <footer className="mx-auto px-4 pb-4 lg:px-0 lg:max-w-5xl">
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.com">
          Gatsby
        </a>{' '}
        {` `} by{' '}
        <a target="_blank" rel="noreferrer" href="https://www.greenit.fr">
          CNUMR
        </a>{' '}
        -{' '}
        <Link
          to="/pages/mentions-legales"
          title="Voir les mentions légales"
          className={`text-white lg:text-inherit text-xl lg:text-base no-underline text-inherit font-medium`}
        >
          Mentions légales
        </Link>
        <Licence />
      </footer>

      <a
        href="#top"
        className="invisible lg:visible fixed bottom-4 right-4 rounded-full px-7 py-4 bg-zinc-300 hover:bg-zinc-400 font-bold text-2xl"
      >
        ↑
      </a>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
