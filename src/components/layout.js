/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import Header from './header'
import Licence from './licence'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

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
          secondaryNavigation {
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
      <footer className="mx-auto px-4 pb-4 lg:px-0 lg:max-w-5xl border-t-2 border-neutral-light pt-4 flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <div>
          <div>
            <span>© {new Date().getFullYear()}</span>
            <span>&middot;</span>
            <span>Association Green IT</span>
            <span>&middot;</span>
            {data.site.siteMetadata?.secondaryNavigation.map((link, key) => {
              return (
                <Link to={link.url} title={link.title} key={key}>
                  {link.label}
                </Link>
              )
            })}
          </div>
          <Licence />
        </div>
        <div>
          <a
            className="inline-flex gap-[.15rem] items-center no-underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.greenit.fr/"
            title={`Aller sur le site de l'assiciation GreenIT (site externe)`}
          >
            <StaticImage
              src="../assets/logo-asso-green-it.png"
              alt={`Logo association Green It - lien sortant vers le site l'association GreenIT`}
            />
          </a>
        </div>
      </footer>

      <a
        href="#top"
        className="invisible lg:visible fixed bottom-4 right-4 rounded-full w-[3rem] h-[3rem] bg-primary-transparent hover:bg-primary hover:text-white font-bold text-2xl flex items-center justify-center font-mono"
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
