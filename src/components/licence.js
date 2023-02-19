import {
  FaCreativeCommons,
  FaCreativeCommonsBy,
  FaCreativeCommonsNc,
  FaCreativeCommonsNd,
} from 'react-icons/fa'

import React from 'react'
import classNames from 'classnames'

function Licence({ size = 'base' }) {
  return (
    <a
      href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr"
      target={`_blank`}
      className={classNames(`flex gap-1 items-center`, {
        'text-xs': size === 'sm',
        'text-base': size !== 'sm',
      })}
      title={`Consulter le contenu de la licence CC BY-NC-ND 4.0 (site externe)`}
    >
      Sous licence CC BY-NC-ND 4.0 <FaCreativeCommons /> <FaCreativeCommonsBy />{' '}
      <FaCreativeCommonsNc /> <FaCreativeCommonsNd />
    </a>
  )
}

export default Licence
