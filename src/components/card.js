import { Link } from 'gatsby'
import React from 'react'

function Card({ markdownRemark }) {
  return (
    <li className="rounded-md bg-slate-100 p-4">
      <Link
        to={`fiches${markdownRemark.fields.slug}`}
        className="flex flex-col justify-between h-full"
      >
        <h3>{markdownRemark.frontmatter.title}</h3>
        <p>{markdownRemark.excerpt}</p>
      </Link>
    </li>
  )
}

export default Card
