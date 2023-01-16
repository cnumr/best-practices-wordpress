import React from 'react'
import classNames from 'classnames'

function MetaItem({
  frontmatter,
  meta,
  fontSize = 'normal',
  displayTitle = false,
}) {
  const values = frontmatter[meta]
  const toDisplay = values
  if (Array.isArray(values)) {
    return (
      <li
        className={classNames('mt-0 mb-2', {
          'text-xs': fontSize === 'xs',
        })}
      >
        {displayTitle === true && (
          <strong className="capitalize">{meta.replace('_', ' ')}: </strong>
        )}
        <ul className="ml-4 my-0">
          {toDisplay.map((item, index) => {
            return (
              <li
                key={index}
                className="my-2 max-h-5 p-0 leading-4 whitespace-nowrap"
              >
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
        className={classNames('mt-0 mb-2 last:mb-0 max-h-5 whitespace-nowrap', {
          'text-xs': fontSize === 'xs',
        })}
      >
        {displayTitle === true && (
          <strong className="capitalize">{meta.replace('_', ' ')}: </strong>
        )}
        {toDisplay || 'TBD'}
      </li>
    )
}

export default MetaItem
