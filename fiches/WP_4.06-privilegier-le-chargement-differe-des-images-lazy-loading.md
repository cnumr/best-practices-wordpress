---
title: 4.06 Privilégier le chargement différé des images (lazy loading)
people: Dominique N. & Catherine G.
scope: Images
responsible:
  - Code(use·ur) → Développeu·se·r
  - Low-code → Freelance et développeur Front-End d'agences
lifecycle: Intégration & Développement
priority_implementation: Fort 👍👍👍
environmental_impact: Fort 🌱🌱🌱
saved_resources:
  - Processeur
  - Mémoire vive
path: /fiches/WP_4.06-privilegier-le-chargement-differe-des-images-lazy-loading
toIndex: true
---

## Sujet

Le Lazy Load ('chargement différé' en français) est une technique d’optimisation qui permet de charger le contenu d'une page d'un site au fur et à mesure que le visiteur la parcourt. Elle permet d'éviter de télécharger de contenus volumineux (images, vidéos, etc.) parfois non nécessaires, car non vus par le visiteur. Par exemple, si votre visiteur a atterri sur votre page par erreur ou s'il a besoin de consulter une seule partie de votre page.

> ⚠️ Cette technique, bien qu'importante, ne doit pas vous empêcher d'optimiser au préalable vos images et vidéos (voir bonnes pratiques du [[scope]] "Images"). Le lazy load permet "seulement" de limiter le nombre d'images chargées inutilement.

## GreenIT vous conseille

### Solution no-code 🌱🌱

Le logiciel WordPress gère désormais le Lazy Load nativement. Vous n'avez plus besoin d'installer d'[[extension|extensions]] pour ajouter cette fonctionnalité.

Ce lazy loading natif a l'avantage d'améliorer les performances globales de votre site, car il ne repose pas sur du code JavaScript en ligne ni des scripts externes.

Certaines extensions vous permettent cependant d'optimiser vos images en amont de leur affichage sur votre site, et peuvent donc être intéressantes (voir les bonnes pratiques du [[scope]] "Images").

## Principe de validation

| Le nombre                                                  | est inférieur ou égal à |
| ---------------------------------------------------------- | :---------------------: |
| d'images chargées au-dessous de la ligne de flottaison |            0            |
