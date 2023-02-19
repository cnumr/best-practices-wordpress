import MetaItem from './meta-item'
import React from 'react'
import classNames from 'classnames'

function FichesMetasDisplay({ frontmatter, className, tableOfContents }) {
  return (
    <div
      className={classNames(
        className,
        `box border-neutral-transparent flex flex-col
        md:flex-row md:flex-wrap md:gap-4 md:justify-between
        lg:flex-col lg:sticky lg:top-[80px] lg:mt-8`
      )}
    >
      <ul className="my-2 md:mb-0">
        <MetaItem
          frontmatter={frontmatter}
          fontSize="sm"
          meta="environmental_impact"
          displayTitle
        />
        <MetaItem
          frontmatter={frontmatter}
          meta="priority_implementation"
          fontSize="sm"
          displayTitle
        />
        <MetaItem
          frontmatter={frontmatter}
          meta="lifecycle"
          displayTitle
          fontSize="sm"
        />
        <MetaItem
          frontmatter={frontmatter}
          meta="scope"
          displayTitle
          fontSize="sm"
        />
        {/* <MetaItem frontmatter={frontmatter} meta="people" displayTitle /> */}
        {/* <MetaItem frontmatter={frontmatter} meta="state_validation" /> */}
        {/* <MetaItem frontmatter={frontmatter} meta="responsible" /> */}
      </ul>
      <div className="border-t-2 border-neutral-transparent md:border-r-2 lg:border-t-2 " />
      <ul className="my-2 md:mb-0">
        <MetaItem
          frontmatter={frontmatter}
          meta="saved_resources"
          displayTitle
          fontSize="sm"
        />
      </ul>
      <div className="border-t-2 border-neutral-transparent md:border-r-2 lg:border-r-0 " />
      {/* <div className="box">
        <span className="font-black">Sommaire</span>
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      </div> */}
      <div className="text-sm my-2 md:mb-0">
        <p className="font-bold mb-0">Sommaire :</p>
        <nav
          aria-label="navigation article"
          className="summary-article"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
      </div>
    </div>
  )
}

export default FichesMetasDisplay
