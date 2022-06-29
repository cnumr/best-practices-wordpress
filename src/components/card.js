import { Link } from 'gatsby'
import React from 'react'

Card.PERSONNAS = 'personnas'
Card.FICHES = 'fiches'

function Card({ markdownRemark, type = Card.PERSONNAS }) {
  return (
    <li className="box interactive">
      <Link
        to={`${markdownRemark.frontmatter.path}`}
        className="flex flex-col h-full"
        title={`Voir la fiche : ${markdownRemark.frontmatter.title}`}
      >
        {type === Card.FICHES && (
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
