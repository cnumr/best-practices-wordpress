import { Link } from 'gatsby'
import React from 'react'
import classNames from 'classnames'

function Item({ frontmatter, item }) {
  const values = frontmatter[item]
  const toDisplay = values
  if (Array.isArray(values)) {
    return (
      <li className="my-0">
        <strong className="capitalize">→ {item.replace('_', ' ')}:</strong>
        <ul className="ml-8">
          {values.map((intItem, index) => {
            if (item === 'responsible') {
              return (
                <li key={index} className="my-0">
                  <Link to={`/personas/${intItem}.md`}>➡︎ {intItem}</Link>
                </li>
              )
            }
            return (
              <li key={index} className="my-0">
                ➡︎ {intItem}
              </li>
            )
          })}
        </ul>
      </li>
    )
  }
  return (
    <li className="my-0">
      <strong className="capitalize">→ {item.replace('_', ' ')}:</strong>{' '}
      {toDisplay || 'TBD'}
    </li>
  )
}

function FichesMetasDisplay({ frontmatter, className, tableOfContents }) {
  return (
    <div
      className={classNames(
        className,
        'grid grid-cols-1 md:grid-cols-3 gap-4 '
      )}
    >
      <ul
        className={classNames(
          'noliststyle flex flex-col gap-1 box col-span-1 md:col-span-2'
        )}
      >
        <Item frontmatter={frontmatter} item="lifecycle" />
        <Item frontmatter={frontmatter} item="environmental_impact" />
        <Item frontmatter={frontmatter} item="scope" />
        <Item frontmatter={frontmatter} item="people" />
        <Item frontmatter={frontmatter} item="priority_implementation" />
        <Item frontmatter={frontmatter} item="saved_resources" />
        {/* <Item frontmatter={frontmatter} item="state_validation" /> */}
        {/* <Item frontmatter={frontmatter} item="responsible" /> */}
      </ul>
      <div className="box">
        <span className="font-black">Sommaire</span>
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      </div>
    </div>
  )
}

export default FichesMetasDisplay
