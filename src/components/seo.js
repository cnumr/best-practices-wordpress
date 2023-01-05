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
          siteMetadata {
            title
            description
            author
            seoImage
            shareFB
            shareTW
            favicon
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = `${location.origin}${site.siteMetadata?.seoImage}`
  const shareFB = `${location.origin}${site.siteMetadata?.shareFB}`
  const shareTW = `${location.origin}${site.siteMetadata?.shareTW}`
  const defaultTitle = site.siteMetadata?.title
  const favicon = site.siteMetadata?.favicon

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s / ${defaultTitle}` : null}
      link={[
        { rel: `image_src`, href: shareFB },
        { rel: `icon`, href: favicon },
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
          name: `og:site_name`,
          content: defaultTitle,
        },
        {
          name: `og:image`,
          content: shareFB,
        },
        {
          name: `og:image:width`,
          content: `1200px`,
        },
        {
          name: `og:image:height`,
          content: `1200px`,
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
          content: `summary_large_image`,
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
        {
          name: `twitter:image`,
          content: shareTW,
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
  location: PropTypes.object,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
