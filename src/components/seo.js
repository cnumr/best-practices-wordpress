/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

function Seo({ description, lang, meta, title, location }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          host
          port
          siteMetadata {
            title
            description
            author
            seoImage
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = `${location.origin}${site.siteMetadata?.seoImage}`
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s / ${defaultTitle}` : null}
      link={[
        { rel: `image_src`, href: metaImage },
        { rel: `canonical`, href: location?.href },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `og:url`,
          content: location.href,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  location: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
