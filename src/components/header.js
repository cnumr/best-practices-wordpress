import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

const Header = ({ siteTitle, className }) => {
  return (
    <header
      className={classNames(
        'min-h-[80px] px-4 lg:px-0 flex sticky z-20 top-0 bg-stone-100 shadow-lg',
        className
      )}
    >
      <div className="w-full mx-auto lg:max-w-5xl flex flex-row justify-between items-center">
        <Link to="/" className="font-semibold" title="Retour à l'accueil">
          {siteTitle}
        </Link>
        <nav>
          <ul className="flex flex-row gap-4 m-0 p-0">
            <li className="!m-0">
              <Link to="/fiches" title="Voir les fiches">
                Fiches
              </Link>
            </li>
            <li className="!m-0">
              <Link to="/personnas" title="Voir les Personnas">
                Personnas
              </Link>
            </li>
            <li className="!m-0">
              <Link to="/recherche" title="Rechercher une fiche">
                Rechercher
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
