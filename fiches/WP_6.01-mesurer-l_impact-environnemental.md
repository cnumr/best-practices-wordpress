---
title: 6.01 Evaluer l'impact environnemental
people: Yann Gautreau
scope: Test
responsible:
  - Code(use·ur) → Développeu·se·r
  - Designeu(se·r)
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Tests & validation
priority_implementation: Fort 👍👍👍
environmental_impact: Fort 🌱🌱🌱
saved_resources:
  - Processeur
  - Mémoire vive
  - Stockage
  - Réseau
  - Requêtes
path: /fiches/WP_6.01-mesurer-l_impact-environnemental
toIndex: true
---

## Sujet

Mesurer l'impact environnemental d'un site en développement ou déjà mis en ligne va permettre d'ajuster au mieux les composants de votre projet et permettre de faire des choix afin d'alléger l'impact de votre projet. Cette mesure doit se faire sur l'ensemble d'un [[parcours-utilisateur]]. Cette mesure va prendre en compte le poids et la complexité des composants de la page : HTML, CSS, JavaScript, chargement des bibliothèques externes (typographie, cartographie, etc.) et aussi mesurer les requêtes serveurs.

## GreenIT vous conseille

Posez-vous des limites par page et pour chaque [[parcours-utilisateur]].

- Une limite de poids : quel est le poids maximum que ma page ne doit pas atteindre ?
- Une limite de temps : en fonction de son terminal et du réseau, quelle est la durée acceptable pour que l’utilisateur atteigne son objectif ?

### Des outils simples d'utilisation à votre disposition

_Actuellement, il n'existe pas d'outil spécifique à WordPress._

[Performance Budget (EN)](https://www.performancebudget.io) : Site permettant le budget possible allouable aux différents éléments qui composent un site comme le JavaScript, le CSS, etc.

Extension GreenIT Analysis : Disponible sur [Chrome](https://chrome.google.com/webstore/detail/greenit-analysis/mofbfhffeklkbebfclfaiifefjflcpad?hl=fr) et [Firefox](https://addons.mozilla.org/fr/firefox/addon/greenit-analysis/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search), l'extension regroupe les fonctionnalités de [EcoIndex.fr](http://www.ecoindex.fr/) (empreinte et performance environnementale) et de [ecometer.org (EN)](http://ecometer.org/) (évaluation de bonnes pratiques).

1. Installer cette extension sur vos navigateurs de test, ils sont accessibles via les outils d'inspecteur de code.
2. Vider votre cache navigateur (afin de simuler une première visite) et cliquer sur "Lancer l'analyse".
   L'extension va attribuer une note de A à G à votre page. De A jusqu'a C le résultat est honorable, de D à G votre site est perfectible. Tirer les conclusions de la note obtenue : le poids des images et leurs nécessités, est-ce que votre page à une vidéo, chargez-vous beaucoup de typographies ou de bibliothèques externes, avez-vous beaucoup d'extensions, avez-vous des animations, etc.

> ❗L'extension vous permet également d'enregistrer l'empreinte d'un [[parcours utilisateur]] complet. Pour ce faire cliquer sur "Sauver l'analyse" et effectuer le parcours de votre utilisateur (de la page catalogue jusqu'à la page validée votre commande par exemple).

[Kastor (EN et FR)](https://kastor.green/) : Site permettant d'évaluer son site selon le [GR491](https://gr491.isit-europe.org/).

**Alléger le poids et la complexité de ses pages est avant tout une question d'équilibre et de choix.**

## Exemples

- Vous aimez les typographies, alors limitez les images sur votre site ou encore.
- Vous souhaitez proposer un média dynamique à vos utilisateurs, privilégiez le podcast à la vidéo.

**Nous vous invitions à vous référer régulièrement à ce référentiel WordPress.**

## Principe de validation

| Le nombre                                                                                           | est inférieur ou égal à |
| --------------------------------------------------------------------------------------------------- | :---------------------: |
| de parcours utilisateur sur votre site non testé avec un outil d'écoconception                      |            0            |
| de parcours utilisateur sur votre site non évalué à l'aide du référentiel d'écoconception WordPress |            0            |
