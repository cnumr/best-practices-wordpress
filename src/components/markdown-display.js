import FichesMetasDisplay from './fiches-metas'
import React from 'react'

function MarkdownDisplay({ type = 'personna', data, pageContext }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, tableOfContents, html } = markdownRemark
  return (
    <section className="blog-post">
      <h1>
        <span className="capitalize">{pageContext.type}</span> -{' '}
        {frontmatter.title}
      </h1>
      <div>
        <strong>Durée de lecture: </strong>
        {markdownRemark.timeToRead}m.
      </div>
      {type === 'fiches' && (
        <FichesMetasDisplay
          frontmatter={frontmatter}
          tableOfContents={tableOfContents}
          className="my-8"
        />
      )}
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  )
}

export default MarkdownDisplay
