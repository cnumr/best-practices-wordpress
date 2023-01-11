import { Layout, Seo } from '../components'
import { Link, graphql } from 'gatsby'

import { FiGithub } from 'react-icons/fi'
import React from 'react'

function ActorsList({ actors }) {
  return (
    <>
      {actors.map(({ name, url, index }) => {
        if (index < actors.length) {
          return (
            <span key={`${name}-${index}`}>
              <a href={url}>{name}</a>,{' '}
            </span>
          )
        } else {
          return (
            <span key={`${name}-${index}`}>
              <a href={url}>{name}</a>.
            </span>
          )
        }
      })}
    </>
  )
}

export default function Home({ data, location }) {
  const totalBP = data.fichesWP.nodes.length
  const site = data.site.siteMetadata.repo

  const contributors = [
    { name: 'Frédéric Bordage', url: 'https://fr.linkedin.com/in/fbordage' },
    { name: 'Catherine G', url: '' },
    { name: 'Yann Gautreau', url: 'https://www.yanngautreau.fr/' },
    { name: 'Yann Kozon', url: 'https://www.yannkozon.com/' },
    { name: 'Florine Sueur', url: 'https://www.florinesueur.fr/' },
  ]

  const reviewers = [
    { name: 'Christian M.', url: 'https://www.nuweb.fr/' },
    { name: 'Stéphanie Vachon', url: '' },
  ]

  return (
    <Layout>
      <Seo
        title="Accueil"
        location={location}
        description="Fiches pour rendre WordPress plus respectueux de l'environnement."
      />
      <main className="content">
        <h1>👋 Bienvenue sur le référentiel d'éconception WordPress</h1>
        <p className="font-bold">
          WordPress alimente plus d'un tier du web, 43% en octobre 2022 !
        </p>
        <p>Pourquoi ? 🤔</p>
        <ul>
          <li>
            Simple d'installation avec de nombreux ajouts possibles et une
            grande personnalisation sans pour autant avoir strictement besoin de
            connaître le fonctionnement d'un serveur, celui d'une base de
            données ou même les bases du code, en font ses points forts.
          </li>
          <li>
            Même pour les professionnels du web, <span>WordPress</span>{' '}
            représente un gain de temps important de développement, une
            maintenance facile, une prise en main rapide pour le client avec une
            grande autonomie pour un budget moindre qu'un développement
            sur-mesure.
          </li>
        </ul>
        <p>
          Malheureusement, voulant être{' '}
          <span className="font-bold">
            une solution qui répond aux besoins de tous, il peut rapidement
            devenir obèse avec un impact environnemental important
          </span>
          . C'est pourquoi nous vous proposons ce référentiel de bonnes
          pratiques d'écoconception dédié à WordPress qui{' '}
          <span className="font-bold">
            vise à sensibiliser, à guider, à promouvoir et à renforcer la
            démarche d'écoconception
          </span>{' '}
          sur des outils existants et peuplant le web de manière conséquente.
        </p>
        <div className="text-center mt-12 mb-16">
          <Link to="/fiches" className="btn btn-outline">
            Découvrez les bonnes pratiques
          </Link>
        </div>
        <p>
          Nous avons conçu ces bonnes pratiques pour qu'elles soient autant
          applicables autant par{' '}
          <span className="font-bold">
            les débutants de WordPress que par les professionnels du web :
            designers et/ou développeurs et/ou administrateurs
          </span>
          . Ainsi sur certaines bonnes pratiques, vous trouverez différents
          niveaux de solutions proposés en fonction de votre appétence pour le
          design et le code ainsi qu'un <Link to="/lexique">lexique</Link>.
        </p>
        <h2>Le contenu</h2>
        <p>
          Le référentiel de bonnes pratiques WordPress est composé de{' '}
          <span className="font-bold">{totalBP} bonnes pratiques</span>{' '}
          regroupées en fonction du cycle de vie suivant :
        </p>
        <ul>
          <li>Analyse des besoins</li>
          <li>Installation</li>
          <li>Conception & Design</li>
          <li>Intégration & Développement</li>
          <li>Contenu & médias</li>
          <li>Tests & validation</li>
          <li>Mise en ligne</li>
          <li>Maintenance</li>
          <li>Fin de vie</li>
        </ul>
        <p>
          Afin de faciliter la lecture et la compréhension, chaque bonne
          pratique décrit le sujet, vous propose des recommandations
          accompagnées d'exemple(s), d'un ou plusieurs principes de validation,
          qui sont les modalités de vérification de mise en place, ainsi que des
          sources le cas échéant.
        </p>
        <p>
          Le référentiel propose aussi des indicateurs :{' '}
          <span className="font-bold">
            l'impact environnemental 🌱 et de la priorité de mise en oeuvre 👍
          </span>
          , pour chacune des bonnes pratiques.
        </p>
        <h2>Notre équipe</h2>
        <p>
          Construit par l'Association Green IT (anciennement CNUMR) en
          collaboration avec WordPress France, ce guide d'écoconception
          WordPress a vu le jour grâce aux deux initiateurs du projet :{' '}
          <a href="https://www.pix-e.fr/">Dominique Nicole</a> et{' '}
          <a href="https://novagaia.fr/">Renaud Héluin</a>
        </p>
        <p>
          Mais aussi à tous nos contributeurs :{' '}
          <ActorsList actors={contributors} />
        </p>
        <p>
          Ainsi que tout les relecteurs de ce projet :{' '}
          <ActorsList actors={reviewers} />
        </p>
        <div className="text-center mt-12 mb-16">
          <a
            href={`${site.repoURL}/blob/${site.mainBanch}/CONTRIBUTING.md`}
            target={`_blank`}
            className="btn btn-outline inline-flex gap-2 items-center"
          >
            Contribuez ! <FiGithub />
          </a>
        </div>
        <h2>Les outils</h2>
        <p>
          Au sein de l'association Green IT (anciennement le collectif CNUMR),
          nous avons développé des outils pour vous aider dans votre démarche
          d'écoconception de votre service numérique.
        </p>
        <h3>Les référentiels</h3>
        En plus du présent référentiel dédié à WordPress{' '}
        <a href="https://github.com/cnumr/best-practices">
          Le référentiel de 115 bonnes pratiques d'écoconception web
        </a>
        , disponible aussi en <a href="https://ecoconceptionweb.com/">livre</a>.
        <h3>Les outils de mesures d'URL</h3>
        <ul>
          <li>
            <a href="https://www.ecoindex.fr/">Le site EcoIndex</a>
          </li>
          <li>
            <a href="http://www.ecometer.org/">Le site Ecometer</a>
          </li>
        </ul>
        <h3>Les outils de mesures</h3>
        <ul>
          <li>
            GreenIT-Analysis (Calcul automatique d'un EcoIndex + Ecometer) :{' '}
            <a href="https://addons.mozilla.org/fr/firefox/addon/greenit-analysis/">
              extension Firefox
            </a>{' '}
            et{' '}
            <a href="https://chrome.google.com/webstore/detail/greenit-analysis/mofbfhffeklkbebfclfaiifefjflcpad">
              extension Chrome
            </a>
          </li>
          <li>
            <a href="https://github.com/cnumr/GreenIT-Analysis-cli">
              GreenIT Analysis CLI
            </a>
          </li>
        </ul>
        <p>
          <i>
            Source :{` `}
            <a href="https://w3techs.com/technologies/history_overview/content_management/all">
              W3Techs
            </a>
          </i>
        </p>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        repo {
          repoURL
          mainBanch
        }
      }
    }
    fichesWP: allFile(
      filter: {
        sourceInstanceName: { eq: "fiches" }
        childMarkdownRemark: { frontmatter: { toIndex: { eq: true } } }
      }
    ) {
      nodes {
        id
      }
    }
  }
  fragment FileFragment on File {
    childMarkdownRemark {
      excerpt(pruneLength: 100)
      timeToRead
      tableOfContents
      frontmatter {
        title
        typeDocument
        path
        scope
        priority_implementation
        lifecycle
        environmental_impact
      }
    }
  }
`
