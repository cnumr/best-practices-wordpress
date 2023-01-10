import MetaItem from './meta-item'
import React from 'react'
import classNames from 'classnames'

function FichesMetasDisplay({ frontmatter, className, tableOfContents }) {
  return (
    <>
      <div
        className={classNames(
          className,
          'grid grid-cols-1 md:grid-cols-3 gap-4 '
        )}
      >
        <ul className="noliststyle flex flex-col gap-1 box col-span-1 md:col-span-2">
          <MetaItem frontmatter={frontmatter} meta="scope" displayTitle />
          <MetaItem frontmatter={frontmatter} meta="lifecycle" displayTitle />
          <MetaItem
            frontmatter={frontmatter}
            meta="environmental_impact"
            displayTitle
          />
          <MetaItem
            frontmatter={frontmatter}
            meta="priority_implementation"
            displayTitle
          />
          <MetaItem frontmatter={frontmatter} meta="people" displayTitle />
          {/* <MetaItem frontmatter={frontmatter} meta="state_validation" /> */}
          {/* <MetaItem frontmatter={frontmatter} meta="responsible" /> */}
        </ul>
        <ul className="noliststyle flex flex-col gap-1 box">
          <MetaItem
            frontmatter={frontmatter}
            meta="saved_resources"
            displayTitle
          />
        </ul>
        {/* <div className="box">
        <span className="font-black">Sommaire</span>
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      </div> */}
      </div>
      <details className="open:rounded-lg p-4 open:ring-2 open:ring-primary open:bg-primary">
        <summary className="font-black cursor-pointer">Sommaire</summary>
        <p dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      </details>
    </>
  )
}

export default FichesMetasDisplay
