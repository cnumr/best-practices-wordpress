import { graphql, useStaticQuery } from 'gatsby'

import { FiGithub } from 'react-icons/fi'
import React from 'react'

function ContributeCTA({ sourceInstanceName, relativePath }) {
  const {
    site: {
      siteMetadata: {
        repo: { repoURL, mainBanch },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repo {
            repoURL
            mainBanch
          }
        }
      }
    }
  `)
  let type = ''
  switch (sourceInstanceName) {
    case 'fiches':
      type = 'la fiche'
      break
    case 'lexique':
      type = 'la fiche lexique'
      break

    default:
      type = 'la persona'
      break
  }
  return (
    <div className="my-8 p-8 border-2 border-primary-500 rounded-md shadow-lg flex flex-col items-center gap-4">
      <div className="text-lg font-extrabold text-center">
        Vous avez repérez une coquille ou vous souhaitez contribuer à rendre
        WordPress plus éco-responsable ?
      </div>
      <p className="font-semibold m-0">
        Venez sur le repo pour lancer une discussion sur {type}.
      </p>
      <a
        href={`${repoURL}/blob/${mainBanch}/${sourceInstanceName}/${relativePath}`}
        target={`_blank`}
        className={`btn hover:px-5 p-3 flex gap-2 items-center !text-white`}
      >
        Voir {type} <FiGithub />
      </a>
    </div>
  )
}

export default ContributeCTA
