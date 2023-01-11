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
    // console.log(type, propertyToMatch)
    setSelectedFilter(propertyToMatch + type)
    if (type === allItemsLabel) {
      setBackToAllItems()
    } else {
      const tmpList = fullList.filter(
        item => _.get(item, propertyToMatch) === type
      )
      setList(tmpList)
    }
  }

  // select method

  const filterSelect = event => {
    const obj = JSON.parse(event.target.value)
    filterList(obj.type, obj.propertiesToMatch)
  }

  // Create button
  const getButton = (label, type, num, className) => {
    return (
      <li
        key={label}
        className={classNames(
          className,
          'list-none whitespace-nowrap m-0 leading-none mb-4'
        )}
      >
        <button
          className={classNames(
            `cursor-pointer badge text-sm transition hover:bg-primary-transparent text-neutral-DEFAUT`,
            {
              'bg-primary !text-white': type + label === selectedFilter,
            }
          )}
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
    const output = []
    _.forEach(object.values, function (value, key) {
      output.push(getButton(key, object.type, value))
    })
    return _.sortBy(output, [
      function (o) {
        return o.position
      },
    ])
  }

  // Create OptionGroupes
  const getOptions = object => {
    const output = []
    _.forEach(object.values, function (value, key) {
      const val = { type: key, propertiesToMatch: object.type }
      output.push(
        <option
          key={key}
          // value={object.type}
          value={JSON.stringify(val)}
          label={`${key} (${value})`}
          selected={selectedFilter === object.type + key || null}
        />
      )
    })
    return output
  }

  return (
    <nav className={classNames(className)}>
      <ul className="flex flex-col gap-2 w-full">
        {getButton(
          multiplesTypes[allItemsLabel].values,
          multiplesTypes[allItemsLabel].type,
          null,
          'hidden lg:inline-block'
        )}
        {propertiesToMatch.map((item, index) => {
          return (
            <li key={index} className="lg:flex hidden list-none gap-4 m-0">
              <span className="leading-none font-bold text-neutral-DEFAULT text-lg p-1 mt-[5px] ml-1 inline-block">
                {item.label}
              </span>
              <ul className="flex gap-2 flex-wrap items-start mb-2">
                {getFilterButtons(multiplesTypes[item.label])}
              </ul>
            </li>
          )
        })}
        <select
          id="filterSelect"
          onChange={e => filterSelect(e)}
          className="lg:hidden w-full"
        >
          <option
            value={JSON.stringify({
              propertiesToMatch: multiplesTypes[allItemsLabel].type,
              type: multiplesTypes[allItemsLabel].values,
            })}
          >
            {multiplesTypes[allItemsLabel].values}
          </option>
          {propertiesToMatch.map((item, key) => {
            return (
              <optgroup key={key} label={item.label}>
                {getOptions(multiplesTypes[item.label])}
              </optgroup>
            )
          })}
        </select>
      </ul>
    </nav>
  )
}

export default FiltersBar
