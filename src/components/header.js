import { BsGithub } from 'react-icons/bs'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { SearchBar } from '../components'

const Header = ({ className, repoURL, navigation }) => {
  const [menuState, setMenuState] = React.useState(`invisible lg:visible`)
  function toggleMenu() {
    if (menuState === `invisible lg:visible`) {
      setMenuState(`w-full h-screen min-h-full`)
    } else {
      setMenuState(`invisible lg:visible`)
    }
  }
  return (
    <header
      className={classNames(
        'min-h-[80px] px-4 lg:px-0 flex sticky z-20 top-0 bg-zinc-100 border-b-2 border-stone-200',
        className
      )}
    >
      <div className="w-full mx-auto lg:max-w-5xl flex flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <div>
            <Link
              to="/"
              className="leading-tight no-underline text-inherit"
              title="Retour à l'accueil"
            >
              <span className="tracking-tight">
                Les bonnes pratiques d'écoconception
              </span>
              <br />
              <span className="font-bold text-xl text-zinc-900">WordPress</span>
            </Link>
          </div>
        </div>
        <nav>
          <ul
            className={classNames(
              menuState,
              `fixed top-0 right-0 px-10 py-16 bg-primary-500 z-50 lg:bg-transparent lg:relative flex flex-col lg:flex-row gap-4 lg:m-0 lg:p-0 lg:items-center`
            )}
          >
            <li className="lg:hidden z-90 fixed top-5 right-5">
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
                    className={`text-white lg:text-inherit text-xl lg:text-base no-underline text-inherit font-medium`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className="!m-0">
              <SearchBar />
            </li>
            <li
              className={`!m-0 border border-primary-600 lg:border-zinc-200 lg:h-7`}
            ></li>
            <li className="!m-0">
              <a
                href={`${repoURL}/blob/main/CONTRIBUTING.md`}
                className={`text-white lg:text-inherit text-xl lg:text-base no-underline text-inherit font-medium`}
                target="_blank"
                rel="noreferrer"
                title="Voir la méthode de contribution sur le GitHub du CNUMR"
              >
                Contribuez !
              </a>
            </li>
            <li className="!m-0">
              <a
                href={repoURL}
                className={`text-white lg:text-inherit text-xl lg:text-base no-underline text-inherit font-medium`}
                target="_blank"
                rel="noreferrer"
                title="Voir le repository GitHub de CNUMR"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
          <div className="flex items-center lg:hidden relative">
            <button
              className="text-3xl text-zinc-900"
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
