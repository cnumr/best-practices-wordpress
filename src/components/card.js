import { Layout, MetaItem } from './index'

import { Link } from 'gatsby'
import React from 'react'
import classNames from 'classnames'

Card.PERSONAS = 'personas'
Card.FICHES = 'fiches'
Card.LEXIQUE = 'lexique'
Card.VERTICAL_LAYOUT = 'vertical'
Card.HORIZONTAL_LAYOUT = 'horizontal'

function trimWikiLinks(str) {
  const regex = /\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/gm
  const subst = `$1`
  if (str === undefined) return null
  return str.replace(regex, subst)
}

function Card({
  markdownRemark,
  type = Card.PERSONAS,
  display = Card.VERTICAL_LAYOUT,
}) {
  return (
    <li className="box interactive">
      <Link
        to={`${markdownRemark.frontmatter.path}.md`}
        className={classNames('flex ', {
          'flex-row h-full items-center justify-between gap-2':
            display === Card.HORIZONTAL_LAYOUT,
          'flex-col h-full divide-y-2 divide-primary':
            display === Card.VERTICAL_LAYOUT,
        })}
        title={`Voir la fiche : ${markdownRemark.frontmatter.title}`}
      >
        <div className="flex flex-col justify-between h-full">
          {type === Card.FICHES ? (
            <h3 className="flex flex-col md:flex-row md:items-center">
              <span>
                <span className="badge bg-primary mr-2 text-xl whitespace-nowrap">
                  BP {markdownRemark.frontmatter.title.slice(0, 4)}
                </span>
              </span>
              <span>{markdownRemark.frontmatter.title.slice(5)}</span>
            </h3>
          ) : (
            <h3>{markdownRemark.frontmatter.title}</h3>
          )}
          {type === Card.LEXIQUE ? (
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            />
          ) : (
            <></>
            // <p className="markdown-excerpt">
            //   {trimWikiLinks(markdownRemark.excerpt)}
            // </p>
          )}
        </div>
        {type === Card.FICHES && (
          <ul className="pt-4 flex flex-col gap-4">
            <MetaItem frontmatter={markdownRemark.frontmatter} meta="scope" />
            <MetaItem
              frontmatter={markdownRemark.frontmatter}
              meta="environmental_impact"
              fontSize="xs"
              displayTitle
            />
            <MetaItem
              frontmatter={markdownRemark.frontmatter}
              meta="priority_implementation"
              fontSize="xs"
              displayTitle
            />
          </ul>
        )}
      </Link>
    </li>
  )
}

export default Card
