import React, { useEffect, useReducer, useState } from 'react'

import classNames from 'classnames'

var _ = require('lodash')

FiltersBar.SEARCH_TYPE_AND = 'AND'
FiltersBar.SEARCH_TYPE_OR = 'OR'

function FiltersBar({
  fullList,
  filteredList,
  resetList,
  propertiesToMatch,
  allItemsLabel = 'All',
  className,
  filterType = FiltersBar.SEARCH_TYPE_OR,
}) {
  // to force refresh the bt color state aka, getBtState(type, label)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
  const [selectedFilters, setSelectedFilters] = useState([
    { type: 'reset', propertyToMatch: allItemsLabel },
  ])
  const [openFilters, setOpenFilters] = useState(false)

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
  const filterList = (type, propertyToMatch, forceOR = false) => {
    // console.log(`selectedFilters`, selectedFilters)
    // console.log(type, propertyToMatch)

    // reset
    if (type === 'reset') {
      // console.log(`RESET`)
      // fill w/ default/reset value
      setSelectedFilters([{ propertyToMatch: allItemsLabel, type: `reset` }])
      // send reseted list outside of the component
      resetList()
      return
    }
    // console.log(type, propertyToMatch, selectedFilters)
    if (filterType === FiltersBar.SEARCH_TYPE_OR || forceOR) {
      if (type === 'reset') {
        // done upper in code
      } else {
        setSelectedFilters([{ propertyToMatch: propertyToMatch, type: type }])
        // filter list
        const tmpList = fullList.filter(
          item => _.get(item, type) === propertyToMatch
        )
        // send filtered list outside of the component
        filteredList(tmpList)
      }
    } else {
      // console.log(type, propertyToMatch, selectedFilters)
      // reset
      if (type === 'reset') {
        // done upper in code
      } else {
        // console.log(`FILTER`)
        // rm reset filter
        const tmpFilters = selectedFilters
        if (tmpFilters[0]?.type === 'reset') {
          tmpFilters.shift()
        }
        // add new filter only
        let hasFilter = false
        let hasTypeFilter = false
        tmpFilters.forEach(filter => {
          if (
            filter?.type === type &&
            filter?.propertyToMatch === propertyToMatch &&
            hasFilter !== true
          ) {
            hasFilter = true
          }
          if (filter?.type === type && hasTypeFilter !== true) {
            hasTypeFilter = true
          }
        })
        // console.log(`hasFilter`, hasFilter)
        if (hasTypeFilter && !hasFilter) {
          // console.log(`rm and replace`)
          removeFilter(tmpFilters, propertyToMatch, type)
          addFilter(tmpFilters, propertyToMatch, type)
          // return
        } else if (hasTypeFilter && hasFilter) {
          // console.log(`rm filter`)
          // removeFilter(tmpFilters, propertyToMatch, type)
        } else if (!hasFilter) {
          // console.log(`add`)
          addFilter(tmpFilters, propertyToMatch, type)
        }
      }
      // console.log(type, propertyToMatch, selectedFilters)
    }
  }

  const addFilter = (tmpFilters = [], propertyToMatch, type) => {
    // add to setSelectedFilters listened by buttons
    // console.log(`addFilter`)
    tmpFilters.push({ propertyToMatch: propertyToMatch, type: type })
    setSelectedFilters(tmpFilters)
    updateFilter()
  }

  const removeFilter = (tmpFilters = [], propertyToMatch, type) => {
    // console.log(`removeFilter`)
    let posExact = -1
    let posType = -1
    tmpFilters.forEach((item, index) => {
      if (item.type === type) {
        posType = index
      }
      if (item.propertyToMatch === propertyToMatch && item.type === type) {
        posExact = index
        posType = -1
      }
    })
    if (posType !== -1) tmpFilters = _.pullAt(tmpFilters, [posType])
    if (posExact !== -1) tmpFilters = _.pullAt(tmpFilters, [posExact])
    setSelectedFilters(tmpFilters)
    updateFilter()
  }

  const updateFilter = () => {
    // console.log(`removeFilter`)
    // trics to refresh bt
    forceUpdate()
    // filter list
    const tmpList = []
    // console.log(`current`, type, propertyToMatch)
    fullList.forEach(item => {
      let count = 0
      selectedFilters.forEach(selected => {
        // console.log(`item.${selected.type}`, _.get(item, selected.type))
        if (_.get(item, selected.type) === selected.propertyToMatch) {
          count = count + 1
        }
      })
      if (selectedFilters.length === count) tmpList.push(item)
    })
    // send filtered list outside of the component
    filteredList(tmpList)
  }

  // select method

  const filterSelect = event => {
    const obj = JSON.parse(event.target.value)
    filterList(obj.type, obj.propertiesToMatch, true)
  }

  const getBtState = (type, label) => {
    let output = false
    selectedFilters.map(filter => {
      if (filter) {
        if (
          filter?.type === type &&
          filter?.propertyToMatch === label &&
          output !== true
        ) {
          // console.log(`output = true`)
          output = true
        } else {
          // console.log(`filter?.type`, filter?.type, `->`, type)
          // console.log(
          //   `filter?.propertyToMatch`,
          //   filter?.propertyToMatch,
          //   `->`,
          //   label
          // )
          // console.log(`---`)
        }
      }
    })
    return output
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
            `cursor-pointer badge text-sm transition hover:bg-primary-transparent text-neutral`,
            {
              'bg-primary !text-white': getBtState(type, label),
            }
          )}
          onClick={() => filterList(type, label)}
        >
          {label}
          {` `}
          {num ? (
            <span className="font-normal opacity-80 text-xs">{`${num}`}</span>
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
      const val = { type: object.type, propertiesToMatch: key }
      // https://stackoverflow.com/questions/73586599/ios-safari-shows-blank-option-text-despite-setting-htmloptionelement-label-bu
      output.push(
        <option
          key={key}
          // value={object.type}
          value={JSON.stringify(val)}
          label={`${key} (${value})`}
          // textContent={`${key} (${value})`}
          selected={getBtState(object.type, key) || null}
        >{`${key} (${value})`}</option>
      )
    })
    return output
  }

  return (
    <>
      <button
        className={`hidden lg:inline-block btn font-bold text-primary`}
        onClick={() => setOpenFilters(!openFilters)}
      >
        {`${openFilters ? 'Masquer' : 'Afficher'} les filtres `}
        <span>{openFilters ? '↑' : '↓'}</span>
      </button>
      <nav
        className={classNames(className)}
        aria-label="Filtres des bonnes pratiques"
      >
        <ul className="flex flex-col gap-2 w-full">
          {openFilters && (
            <>
              {getButton(
                multiplesTypes[allItemsLabel].values,
                multiplesTypes[allItemsLabel].type,
                null,
                'hidden lg:inline-block'
              )}
              {propertiesToMatch.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="lg:flex hidden list-none gap-4 m-0"
                  >
                    <span className="leading-none font-bold text-neutral-DEFAULT text-lg p-1 mt-[5px] ml-1 inline-block">
                      {item.label}
                    </span>
                    <ul className="flex gap-2 flex-wrap items-start mb-2">
                      {getFilterButtons(multiplesTypes[item.label])}
                    </ul>
                  </li>
                )
              })}
            </>
          )}
          <select
            id="filterSelect"
            onChange={e => filterSelect(e)}
            className="lg:hidden w-full"
            aria-label="Sélectionner un filtre"
          >
            <option
              value={JSON.stringify({
                type: multiplesTypes[allItemsLabel].type,
                propertiesToMatch: multiplesTypes[allItemsLabel].values,
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
    </>
  )
}

export default FiltersBar
