import FichesMetasDisplay from './fiches-metas'
import React from 'react'

function MarkdownDisplay({ type = 'personna', data, pageContext }) {
  const { markdownRemark, fields } = data // data.markdownRemark holds your post data
  const { frontmatter, tableOfContents, html } = markdownRemark
  return (
    <section>
      {type === 'fiches' ? (
        <h1 className="flex items-center">
          <span className="badge bg-primary-500 mr-2 text-2xl whitespace-nowrap">
            BP {frontmatter.title.slice(0, 4)}
          </span>
          <span>{frontmatter.title.slice(5)}</span>
        </h1>
      ) : (
        <h1>{frontmatter.title}</h1>
      )}

      <span className="text-primary-500 font-bold">
        Mise à jour le{' '}
        {new Date(fields?.gitUpdateTime).toLocaleDateString('fr')}
      </span>
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
