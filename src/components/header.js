import { BsGithub } from 'react-icons/bs'
import Licence from './licence'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import classNames from 'classnames'

const Header = ({ siteTitle, className, repoURL, navigation }) => {
  const [menuState, setMenuState] = React.useState(`invisible md:visible`)
  function toggleMenu() {
    if (menuState === `invisible md:visible`) {
      setMenuState(`w-full h-screen`)
    } else {
      setMenuState(`invisible md:visible`)
    }
  }
  return (
    <header
      className={classNames(
        'min-h-[80px] px-4 lg:px-0 flex sticky z-20 top-0 bg-stone-100 shadow-lg',
        className
      )}
    >
      <div className="w-full mx-auto lg:max-w-5xl flex flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <StaticImage
            alt="Logo CNUMR"
            src={`../assets/logo-cnumr.png`}
            class={`w-[80px] -m-3`}
          />
          <div>
            <Link to="/" className="font-semibold" title="Retour à l'accueil">
              {siteTitle}
            </Link>
            <Licence size="sm" />
          </div>
        </div>
        <nav>
          <ul
            className={classNames(
              menuState,
              `fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50 md:bg-transparent md:relative flex flex-col md:flex-row gap-4 md:m-0 md:p-0 md:items-center`
            )}
          >
            <li className="md:hidden z-90 fixed top-5 right-5">
              <button
                className="text-right text-white text-4xl"
                onClick={() => toggleMenu()}
              >
                &times;
              </button>
            </li>
            {navigation.map((item, index) => {
              return (
                <li className="!m-0" key={index}>
                  <Link
                    to={item.url}
                    title={item.title}
                    className={`text-white md:text-inherit text-xl md:text-base`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className="!m-0">
              <a
                href={repoURL}
                className={`text-white md:text-inherit text-xl md:text-base`}
                target="_blank"
                rel="no-follow"
                title="Voir le repository GitHub de CNUMR"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
          <div className="flex items-center md:hidden relative">
            <button
              className="text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
              onClick={() => toggleMenu()}
            >
              &#9776;
            </button>
          </div>
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
