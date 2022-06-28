import * as React from 'react'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Header = ({ siteTitle, className }) => (
  <header
    className={classNames(
      className,
      'min-h-[80px] flex flex-row justify-between items-center'
    )}
  >
    <Link to="/" className="font-semibold" title="Retour à l'accueil">
      {siteTitle}
    </Link>
    <nav>
      <ul className="flex flex-row gap-2">
        <li>
          <Link to="/fiches">Fiches</Link>
        </li>
        <li>
          <Link to="/personnas">Personnas</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
