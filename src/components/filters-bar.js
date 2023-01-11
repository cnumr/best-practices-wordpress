import React, { useState } from 'react'

import classNames from 'classnames'

var _ = require('lodash')

const FiltersBar = ({
  fullList,
  setList,
  setBackToAllItems,
  propertiesToMatch,
  allItemsLabel = 'All',
  className,
}) => {
  const [selectedFilter, setSelectedFilter] = useState(allItemsLabel)

  //   construct dataset
  const multiplesTypes = {}
  let position = 0
  //   Add reset filter
  multiplesTypes[allItemsLabel] = {
    values: allItemsLabel,
    count: 1,
    position: position,
    type: 'reset',
  }
  // Add datas from propertiesToMatch [{ label: 'Scope', meta: 'childMarkdownRemark.frontmatter.scope' }...]
  propertiesToMatch.forEach(element => {
    position++
    multiplesTypes[element.label] = {
      values: {},
      position: position,
      type: element.meta,
    }
    _.sortBy(fullList, element.meta).map(item => {
      const output = _.get(item, element.meta)
      // ordering
      if (multiplesTypes[element.label].values[output]) {
        multiplesTypes[element.label].values[output] =
          multiplesTypes[element.label].values[output] + 1
      } else {
        multiplesTypes[element.label].values[output] = 1
      }
      return output
    })
  })

  // filter method
  const filterList = (type, propertyToMatch) => {
    console.log(type, propertyToMatch)
    setSelectedFilter(type)
    if (type === allItemsLabel) {
      setBackToAllItems()
    } else {
      const tmpList = fullList.filter(
        item => _.get(item, propertyToMatch) === type
      )
      setList(tmpList)
    }
  }

  // Create button
  const getButton = (label, type, num) => {
    return (
      <li
        key={label}
        className="list-none whitespace-nowrap m-0 leading-none mb-4"
      >
        <button
          className={`cursor-pointer badge text-sm transition hover:bg-primary-transparent text-neutral-DEFAUT ${
            label === selectedFilter ? 'bg-primary !text-white' : ''
          }`}
          onClick={() => filterList(label, type)}
        >
          {label}
          {` `}
          {num ? (
            <span className="font-normal opacity-80">{`(${num})`}</span>
          ) : (
            ``
          )}
        </button>
      </li>
    )
  }
  // Create button series from propertiesToMatch
  const getFilterButtons = object => {
    const ouput = []
    _.forEach(object.values, function (value, key) {
      ouput.push(getButton(key, object.type, value))
    })
    return _.sortBy(ouput, [
      function (o) {
        return o.position
      },
    ])
  }

  return (
    <nav className={classNames(className)}>
      <ul className="flex flex-col gap-2">
        {getButton(
          multiplesTypes[allItemsLabel].values,
          multiplesTypes[allItemsLabel].type
        )}
        {propertiesToMatch.map((item, index) => {
          return (
            <li key={index} className="flex list-none gap-4 m-0">
              <span className="leading-none font-bold text-neutral-DEFAULT text-lg p-1 mt-[5px] ml-1 inline-block">
                {item.label}
              </span>
              <ul className="flex gap-2 flex-wrap items-start mb-2">
                {getFilterButtons(multiplesTypes[item.label])}
              </ul>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default FiltersBar
