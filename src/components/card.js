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
  function cleanImpact(meta) {
    return markdownRemark.frontmatter[`${meta}`].replace(
      /Fort|Moyen|Faible/gi,
      ' '
    )
  }

  return (
    <li className="box interactive border-neutral-transparent py-2 md:py-6 mb-4">
      <Link
        to={`${markdownRemark.frontmatter.path}.md`}
        className={classNames('flex no-underline', {
          'flex-row h-full items-center justify-between gap-2':
            display === Card.HORIZONTAL_LAYOUT,
          'flex-col h-full divide-y-2 divide-primary':
            display === Card.VERTICAL_LAYOUT,
        })}
        title={`Voir la fiche : ${markdownRemark.frontmatter.title}`}
      >
        {type === Card.FICHES ? (
          <section className="md:grid md:grid-cols-[2fr_1fr] md:grid-rows-2 md:gap-2 mt-0 text-neutral-DEFAUT text-lg font-bold mb-0">
            <h2 className="md:col-span-1 md:row-span-2 flex flex-row items-start text-neutral-DEFAUT text-lg font-bold m-0">
              <span className="badge bg-primary border-primary mr-2 whitespace-nowrap">
                BP {markdownRemark.frontmatter.title.slice(0, 4)}
              </span>
              <span>{markdownRemark.frontmatter.title.slice(5)}</span>
            </h2>
            <div className="flex flex-row items-center justify-end gap-2">
              <span
                title={`Priority Implementation`}
                aria-label={`Priority Implementation : ${
                  markdownRemark.frontmatter[`priority_implementation`]
                }`}
                role="img"
              >
                {cleanImpact('priority_implementation')}
              </span>
              <span>|</span>
              <span
                title={`Environmental Impact`}
                aria-label={`Environmental Impact : ${
                  markdownRemark.frontmatter[`environmental_impact`]
                }`}
                role="img"
              >
                {cleanImpact('environmental_impact')}
              </span>
            </div>
            <div className="flex flex-row items-center justify-end mt-2 gap-2 md:mt-0 md:gap-4">
              <span
                title={`Lifecycle`}
                className="badge border-primary text-neutral-DEFAUT text-xs"
              >
                {markdownRemark.frontmatter.lifecycle}
              </span>
              <span
                title={`Scope`}
                className="badge border-primary text-neutral-DEFAUT text-xs"
              >
                {markdownRemark.frontmatter.scope}
              </span>
            </div>
          </section>
        ) : (
          <h3 className="mt-0">{markdownRemark.frontmatter.title}</h3>
        )}
        {/* {type === Card.LEXIQUE ? (
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            />
          ) : (
            <></>
          )} */}

        {/* {type === Card.FICHES && (
          <ul
            className={classNames(
              'mb-0 flex flex-col',
              {
                'gap-2 md:gap-4 pt-4': display === Card.VERTICAL_LAYOUT,
              },
              {
                'gap-2': display === Card.HORIZONTAL_LAYOUT,
              }
            )}
          >
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
        )} */}
      </Link>
    </li>
  )
}

export default Card
