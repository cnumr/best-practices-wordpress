---
title: 4.03 Limiter le nombre de révisions
people: Dominique N.
scope: Stockage
responsible:
  - Code(use·ur) → Développeu·se·r
lifecycle: Intégration & Développement
priority_implementation: Faible 👍
environmental_impact: Faible 🌱
saved_resources:
  - Stockage
path: /fiches/WP_4.03-limiter-le-nombre-de-revisions
toIndex: true
---

## Sujet

WordPress enregistre des révisions pour chaque mise à jour des contenus. Vous pouvez les limiter aux 10 dernières modifications afin de limiter le poids de la base de données et automatiser une partie de l'entretien de votre site [Entretenir son site régulièrement](./01.%20Entretenir%20son%20site%20régulièrement.md).

Cette bonne pratique est à appliquer en complément de la fiche [Augmenter l'intervale de temps entre deux sauvegardes automatiques](./14.%20Augmenter%20l'intervale%20de%20temps%20entre%20deux%20sauvegardes%20automatiques.md)

## GreenIT vous conseille

Placez cette ligne dans votre fichier de configuration `wp-config.php` où X étant le nombre de la limite :

`define('WP_POST_REVISIONS', X);`

## Exemple :

Pour enregistrer seulement les 10 dernières révisions :
`define('WP_POST_REVISIONS', 10);`

Pour supprimer l'enregistrement des révisions :
`define('WP_POST_REVISIONS', false);`

## Principe de validation

| Le nombre                | est inférieur ou égal à |
| ------------------------ | :---------------------: |
| de révisions par contenu |           10            |
