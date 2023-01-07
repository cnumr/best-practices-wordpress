import { Link } from 'gatsby'
import React from 'react'
import classNames from 'classnames'

function InternalNav({ pageContext, previous, next, className }) {
  return (
    <nav className={classNames('blog-post-nav border-t-2 pt-4', className)}>
      <ul
        className={classNames('grid noliststyle', {
          'grid-cols-3': previous && next,
          'grid-cols-2': !previous || !next,
        })}
      >
        {previous && (
          <li className="text-center md:text-left">
            <Link to={`${previous.frontmatter.path}.md`} rel="prev">
              ←{' '}
              <span className="hidden md:block">
                {previous.frontmatter.title}
              </span>
            </Link>
          </li>
        )}
        <li
          className={classNames('', {
            'text-right': !previous,
            'text-left': !next,
            'text-center': next && previous,
          })}
        >
          {/* <Link to="/" rel="home">
            Accueil
          </Link> */}
        </li>
        {next && (
          <li className="text-center md:text-right">
            <Link to={`${next.frontmatter.path}.md`} rel="next">
              →{' '}
              <span className="hidden md:block">{next.frontmatter.title}</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default InternalNav
