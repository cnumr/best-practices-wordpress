---
title: WP_4.30_Limiter le poids des fichiers CSS
people: Yann Gautreau.
scope: Thèmes
responsible:
  - Code(use·ur) → Développeu·se·r
  - Low-code → Freelance et développeur Front-End d'agences
lifecycle: Intégration & Développement
priority_implementation: Fort 👍👍👍
environmental_impact: Fort 🌱🌱🌱
saved_resources:
  - Réseau
  - Requêtes
path: /fiches/WP_4.30-limiter-le-poids-des-fichiers-css.md
toIndex: true
---

## Sujet

Le poids numérique des fichiers CSS est en constante augmentation depuis 10 ans, les thèmes et les extensions de wordPress chargent chacun des fichiers CSS qui vont se superposer les uns aux autres. La maintenance de vos fichiers de style va garantir une optimisation du poids numérique.

## GreenIT vous conseille

### Solution no-code 🌱

Nous vous invitons à vous référer à la bonne pratique : [Utiliser un système de cache](/fiches/12-utiliser-un-systeme-de-cache). La plupart des [[extension|extensions]] de cache propose à minima la minification du CSS.

### Solution code 🌱🌱🌱

Bien souvent par peur de dénaturer certaines pages, d'autres règles de style sont éditées au lieu de les adapter ou de les supprimer.

Nous vous recommandons de :

- Supprimer les styles non utilisés
- Diviser les fichiers CSS afin d’en faciliter la maintenance (grid.css, reset.css, element.css, widget.css, etc.)
- Ne pas utiliser `@import` pour appeler un fichier de CSS, cela peut sembler pratique, mais bloque le rendu navigateur le temps du chargement de la ressource
- Privilégier l'intégration de vos fichiers CSS via la balise `<link>`, en tenant compte de la hiérarchisation des chargements des styles par le navigateur (pour un même sélécteur, c'est la dernière règle CSS déclarée qui est prise en compte par le navigateur)
- Minifier les fichiers CSS
- Éviter d'utiliser les propriétés coûteuses en ressources (`position : fixed`, `border-radius`, `box-shadow`, `text-shadow`, `opacity`, `transform`, `filter`)
- Adopter une approche mobile-first (économie de style et de ressources) et ajoutons les styles à mesure que le support s’agrandit (Voir la fiche [Concevoir en Mobile First](/fiches/20-concevoir-en-mobile-firt)).

## Principe de validation

| Le nombre                        | est inférieur ou égal à |
| -------------------------------- | :---------------------: |
| de règles de style non utilisées |            0            |
| de fichiers CSS non minifiés     |            0            |
