import React from 'react'
import classNames from 'classnames'

function Item({ frontmatter, item }) {
  const values = frontmatter[item]
  const toDisplay = values
  if (Array.isArray(values)) {
    return (
      <li className="my-0">
        <strong>→ {item}:</strong>
        <ul className="ml-8">
          {values.map((intItem, index) => {
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
      <strong>→ {item}:</strong> {toDisplay || 'TBD'}
    </li>
  )
}

function FichesMetasDisplay({ frontmatter, className, tableOfContents }) {
  return (
    <div className={classNames(className, 'grid grid-cols-3 gap-4 ')}>
      <ul
        className={classNames('noliststyle flex flex-col gap-1 box col-span-2')}
      >
        <Item frontmatter={frontmatter} item="complexity_implementation" />
        <Item frontmatter={frontmatter} item="design_phase" />
        <Item frontmatter={frontmatter} item="environmental_impact" />
        <Item frontmatter={frontmatter} item="family" />
        <Item frontmatter={frontmatter} item="people" />
        <Item frontmatter={frontmatter} item="priority_implementation" />
        <Item frontmatter={frontmatter} item="saved_resources" />
        <Item frontmatter={frontmatter} item="state_validation" />
        <Item frontmatter={frontmatter} item="targeted_people" />
      </ul>
      <div className="box">
        <span className="font-black">Sommaire</span>
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      </div>
    </div>
  )
}

export default FichesMetasDisplay
