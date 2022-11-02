import { Field, Form, Formik } from 'formik'
import { Layout, Seo } from '../components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'

import { useFlexSearch } from 'react-use-flexsearch'

function Recherche({ location }) {
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
  const results = useFlexSearch(query, index, store)
  return (
    <Layout>
      <Seo
        title="Recherche"
        location={location}
        description="Rechercher des personas ou des fiches de fonnes pratiques pour rendre WordPress plus respectueux de l'environnement."
      />
      <main>
        <h1>Recherche de fiches & personnnas</h1>
        <Formik
          initialValues={{ query: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setQuery(values.query)
            setSubmitting(false)
          }}
        >
          <Form className="flex gap-2 mb-8">
            <Field name="query" className="ring-1" />
            <button type="submit" className="btn">
              Rechercher
            </button>
          </Form>
        </Formik>
        {results.length > 0 && <h2>Résultats:</h2>}
        <ul>
          {results.map(result => (
            <li key={result.id}>
              <Link to={result.path}>{result.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

export default Recherche
