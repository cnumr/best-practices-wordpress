import { Layout, Seo } from '../components'

import React from 'react'

function MentionsLegales({ location }) {
  return (
    <Layout>
      <Seo
        title="Mentions légales"
        location={location}
        description="Les Mentions légales du site."
      />

      <h1>Mentions Légales</h1>
      <h2>Licence CC-By-NC-ND</h2>
      <p>
        Vous avez l'obligation de transmettre les titres et les règles de
        validation de toutes les bonnes pratiques pour WordPress de la version 1
        en l'état, sans modification, intégralement, en incluant les
        informations ci-dessous:
      </p>
      <p className="pl-8">
        Le "Référentiel d'écoconception web pour WordPress (REWWP)" est publié
        par l'association Green IT dans le cadre des travaux du Collectif
        conception numérique responsable selon les termes de la licence Creative
        Commons Attribution - Pas d'Utilisation Commerciale - Pas de
        Modification 4.0 International. Fondé(e) sur une œuvre disponible à
        https://collectif.greenit.fr/
      </p>
      <p className="pl-8">
        Cette oeuvre, création, site ou texte est sous licence Creative Commons
        Attribution - Pas d'Utilisation Commerciale - Pas de Modification 4.0
        International. Pour accéder à une copie de cette licence, merci de vous
        rendre à l'adresse suivante
        https://creativecommons.org/licenses/by-nc-nd/4.0/ ou envoyez un
        courrier à Creative Commons, 444 Castro Street, Suite 900, Mountain
        View, California, 94041, USA.
      </p>
      <h2>Utilisation</h2>
      <p>
        L'ensemble du référentiel : titre, fiche, règle de test, seuil de
        conformité et taxonomie des bonnes pratiques pour WordPress de la
        version 1 sont publiés sous licence Creative Commons BY-NC-ND. Cela
        signifie que vous pouvez l'utiliser librement pour des utilisations non
        commerciales, à la condition de maintenir la paternité du contenu, via
        un lien vers https://collectif.greenit.fr et
        https://www.ecoconceptionweb.com.
      </p>
      <h2>Titre</h2>
      <p>Référentiel d'écoconception web pour WordPress (REWWP)</p>
      <p>Auteur principal: Association Green IT</p>
    </Layout>
  )
}

export default MentionsLegales
