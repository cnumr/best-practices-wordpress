import Card from './card'
import FichesMetasDisplay from './fiches-metas'
import React from 'react'

function MarkdownDisplay({ type = 'personna', data, pageContext }) {
  const { markdownRemark, fields } = data // data.markdownRemark holds your post data
  const { frontmatter, tableOfContents, html } = markdownRemark
  return (
    <section>
      {type === Card.FICHES ? (
        <h1 className="flex flex-col md:flex-row items-center">
          <span className="badge bg-primary mr-2 text-2xl whitespace-nowrap">
            BP {frontmatter.title.slice(0, 4)}
          </span>
          <span>{frontmatter.title.slice(5)}</span>
        </h1>
      ) : (
        <h1>{frontmatter.title}</h1>
      )}

      <span className="text-primary font-bold">
        Mise à jour le{' '}
        {new Date(fields?.gitUpdateTime).toLocaleDateString('fr')}
      </span>
      {type === Card.FICHES && (
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
