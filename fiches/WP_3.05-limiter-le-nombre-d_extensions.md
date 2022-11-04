---
title: 3.05 Limiter le nombre d'extensions
people: Yann K.
scope: Fonctionnalités
responsible:
  - Code(use·ur) → Développeu·se·r
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Conception & Design
priority_implementation: Fort 👍👍👍
environmental_impact: Fort 🌱🌱🌱
saved_resources:
  - Processeur
  - Mémoire vive
  - Stockage
  - Réseau
  - Requêtes
path: /fiches/WP_3.05-limiter-le-nombre-d_extensions
toIndex: true
---

## Sujet

Les [[extension|extensions]] ont contribué au succès du [[cms|CMS]], mais souvent ayant pour contre partie une baisse de performance générale et une augmentation accrue de l'empreinte environnementale du site.

Elles génèrent régulièrement des :

- augmentations du nombre de [[requete|requêtes]]
- augmentations du poids de pages
- augmentations du temps de traitement des requêtes internes

## GreenIT vous conseille

- Limiter l'utilisation des extensions à des fonctions nécessaires et privilégier des extensions optimisées.
- Supprimer les extensions non utilisées.
- Pour les extensions ayant un impact côté client, il est également possible de regrouper les requêtes vers les fichiers statiques (CSS, JavaScript).

## Exemple

Préférer l'utilisation de Gutenberg, éditeur par défaut de WordPress, plutôt qu'une extension de constructeur de pages comme Divi, Elementor, GeneratePress etc.

## Principe de validation

| Le nombre    | est inférieur ou égal à |
| ------------ | :---------------------: |
| d'extensions |           10            |

## Sources

- [Les plugins ralentissent WordPress : mythe ou réalité](https://www.ex2.com/tutoriels/les-plugins-ralentissent-wordpress-mythe-ou-realite/)
- [On a testé 10 Plugins de sliders pour WordPress, voici le meilleur](https://wpmarmite.com/slider-wordpress/)
- [What’s the Fastest WordPress Page Builder? Performance Comparison (EN)](https://gobarrelroll.com/wordpress-page-builder-performance-comparison/)
