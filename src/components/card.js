import { Link } from 'gatsby'
import React from 'react'
import classNames from 'classnames'

Card.PERSONNAS = 'personnas'
Card.FICHES = 'fiches'

function MetaItem({ metas, meta, fontSize = 'normal' }) {
  if (Array.isArray(metas[meta])) {
    return (
      <li
        className={classNames('my-0', {
          'text-xs': fontSize === 'xs',
        })}
      >
        <strong className="capitalize">{meta.replace('_', ' ')}: </strong>{' '}
        <ul className="ml-4 my-0">
          {metas[meta].map((item, index) => {
            return (
              <li key={index} className="my-0 max-h-5 p-0 leading-4">
                → {item}
              </li>
            )
          })}
        </ul>
      </li>
    )
  } else
    return (
      <li
        className={classNames('my-0 max-h-5', {
          'text-xs': fontSize === 'xs',
        })}
      >
        <strong className="capitalize">{meta.replace('_', ' ')}: </strong>{' '}
        {metas[meta] || 'TBD'}
      </li>
    )
}

function Card({ markdownRemark, type = Card.PERSONNAS }) {
  return (
    <li className="box interactive">
      <Link
        to={`${markdownRemark.frontmatter.path}`}
        className="flex flex-col h-full divide-y-2"
        title={`Voir la fiche : ${markdownRemark.frontmatter.title}`}
      >
        {type === Card.FICHES && (
          <ul className="mb-4">
            <MetaItem metas={markdownRemark.frontmatter} meta="scope" />
          </ul>
        )}
        <div className="flex flex-col justify-between h-full">
          <h3>{markdownRemark.frontmatter.title}</h3>
          <p>{markdownRemark.excerpt}</p>
          {type === Card.FICHES && (
            <div>
              <hr />
              <ul className="mt-4">
                <MetaItem
                  metas={markdownRemark.frontmatter}
                  meta="environmental_impact"
                  fontSize="xs"
                />
                <MetaItem
                  metas={markdownRemark.frontmatter}
                  meta="priority_implementation"
                  fontSize="xs"
                />
              </ul>
            </div>
          )}
        </div>
      </Link>
    </li>
  )
}

export default Card
