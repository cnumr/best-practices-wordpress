import React, { useState } from 'react'

import classNames from 'classnames'

var _ = require('lodash')

const SearchButtons = ({
  fullList,
  setList,
  setBackToAllItems,
  propertyToMatch,
  allItemsLabel = 'All',
  itemsNotSetLabel = 'Undefined',
  className,
}) => {
  const [index, setIndex] = useState(0)
  const types = [
    allItemsLabel,
    ...new Set(
      fullList.map(item => {
        return _.get(item, propertyToMatch)
      })
    ),
  ]

  const showList = (type, typeIndex) => {
    setIndex(typeIndex)

    if (type === allItemsLabel) {
      setBackToAllItems()
    } else {
      const tmpList = fullList.filter(
        item => _.get(item, propertyToMatch) === type
      )
      setList(tmpList)
    }
  }
  return (
    <nav className={classNames(className)}>
      {types.map((type, typeIndex) => {
        if (type === undefined) return null
        return (
          <button
            key={typeIndex}
            className={`cursor-pointer transition hover:underline ${
              index === typeIndex ? 'underline' : ''
            }`}
            onClick={() => showList(type, typeIndex)}
          >
            {type || itemsNotSetLabel}
          </button>
        )
      })}
    </nav>
  )
}

export default SearchButtons
