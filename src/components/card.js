import { Link } from 'gatsby'
import React from 'react'

function Card({ markdownRemark, type = 'personnas' }) {
  return (
    <li className="box interactive">
      <Link
        to={`/${type}${markdownRemark.fields.slug}`}
        className="flex flex-col h-full"
      >
        {type === 'personnas' && (
          <div>
            <strong>Famille: </strong> {markdownRemark.frontmatter.family}
          </div>
        )}
        <div className="flex flex-col justify-between h-full">
          <h3>{markdownRemark.frontmatter.title}</h3>
          <p>{markdownRemark.excerpt}</p>
        </div>
      </Link>
    </li>
  )
}

export default Card
