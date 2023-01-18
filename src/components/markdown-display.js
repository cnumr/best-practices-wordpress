import Card from './card'
import FichesMetasDisplay from './fiches-metas'
import React from 'react'

function MarkdownDisplay({ type = 'personna', data, pageContext }) {
  const { markdownRemark, fields } = data // data.markdownRemark holds your post data
  const { frontmatter, tableOfContents, html } = markdownRemark
  return (
    <article className="lg:grid lg:gap-4 lg:grid-cols-[1fr_5fr]">
      {type === Card.FICHES ? (
        <>
          <i>
            Mise à jour le{' '}
            {new Date(fields?.gitUpdateTime).toLocaleDateString('fr')}
          </i>
          <h1 className="lg:col-span-2 flex flex-col lg:flex-row items-start gap-2 lg:gap-0 lg:items-center">
            <span className="badge bg-primary lg:mr-2 text-xl ">
              BP {frontmatter.title.slice(0, 4)}
            </span>
            <span>{frontmatter.title.slice(5)}</span>
          </h1>
        </>
      ) : (
        <h1>{frontmatter.title}</h1>
      )}

      {type === Card.FICHES && (
        <aside>
          <FichesMetasDisplay
            frontmatter={frontmatter}
            tableOfContents={tableOfContents}
            className=""
          />
        </aside>
      )}
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}

export default MarkdownDisplay
