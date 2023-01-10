import { Field, Form, Formik } from 'formik'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'

import { FaSearch } from 'react-icons/fa'
import { useFlexSearch } from 'react-use-flexsearch'

function SearchBar() {
  const data = useStaticQuery(graphql`
    {
      localSearchFiches {
        index
        store
      }
    }
  `)
  const { index, store } = data.localSearchFiches
  const [query, setQuery] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const results = useFlexSearch(query, index, store)

  return (
    <>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query)
          setShowResults(true)
          setSubmitting(false)
        }}
      >
        {({ resetForm, dirty }) => (
          <>
            <Form className="flex gap-1">
              <Field
                name="query"
                className="rounded-md border-b-2 broder-neutral-light"
              />
              <button
                type="submit"
                className="small-primary-btn"
                title="Rechercher"
                disabled={!dirty}
              >
                <FaSearch />
              </button>
            </Form>

            {showResults && (
              <div className="lg:absolute lg:rounded-md  max-h-96 overflow-auto mt-5">
                <ul className="relative  text-white lg:text-inherit">
                  {results.length > 0 ? (
                    <>
                      {results.map((result, index) => (
                        <Link
                          key={index}
                          to={result.path}
                          className="no-underline font-medium"
                        >
                          <li
                            key={result.id}
                            className="!m-0 border-primary-focus hover:bg-primary-dark border-b-2 lg:border-neutral-light px-4 py-3 leading-6  lg:bg-zinc-100 lg:border-stone-200 lg:hover:bg-zinc-200"
                          >
                            {result.path.match('fiches') ? (
                              <div className="flex flex-row items-center">
                                <span className="badge border-primary-dark bg-primary-dark mr-2">
                                  BP {result.title.slice(0, 4)}
                                </span>
                                <span>{result.title.slice(5)}</span>
                              </div>
                            ) : (
                              <div className="flex flex-row items-center">
                                <span className="badge border-primary-dark text-primary-dark mr-2">
                                  Lexique
                                </span>
                                <span>{result.title}</span>
                              </div>
                            )}
                          </li>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <>
                      <li className="!m-0 px-4 py-3 font-medium">
                        Aucun de résultat trouvé !
                      </li>
                    </>
                  )}
                  <li className="!m-0 text-center sticky block bottom-0 lg:border-b-2 lg:border-neutral-light lg:bg-zinc-200 lg:hover:bg-zinc-300 bg-primary hover:bg-primary-dark">
                    <button
                      className="lg:text-stone-600 text-base"
                      onClick={() => {
                        setShowResults(false)
                        resetForm()
                      }}
                    >
                      Effacer la recherche ↑
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
      </Formik>
    </>
  )
}

export default SearchBar
