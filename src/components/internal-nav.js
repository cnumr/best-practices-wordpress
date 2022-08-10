import { Link } from 'gatsby'
import React from 'react'
import classNames from 'classnames'

function InternalNav({ pageContext, previous, next, className }) {
  return (
    <nav className={classNames('blog-post-nav border-t-2 pt-4', className)}>
      <ul className="flex justify-between noliststyle">
        {previous && (
          <li>
            <Link to={`${previous.frontmatter.path}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          </li>
        )}
        <li>
          <Link to="/" rel="home">
            Accueil
          </Link>
        </li>
        {next && (
          <li>
            <Link to={`${next.frontmatter.path}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default InternalNav
