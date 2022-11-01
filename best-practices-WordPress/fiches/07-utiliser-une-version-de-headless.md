---
title: WP_4.07_Utiliser une version de headless (sans tête)
people: TBD
scope: Front-Office
responsible:
  - Code(use·ur) → Développeu·se·r
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Intégration & Développement
priority_implementation: Fort 👍👍👍
environmental_impact: Fort 🌱🌱🌱
saved_resources:
  - Processeur
  - Réseau
  - Requêtes
path: /fiches/utiliser-une-version-de-headless
toIndex: false
---

# 07. Utiliser une version de headless / sans tête

## Sujet

Lorsqu’une personne visite un site web dynamique, différentes requêtes sont générées entre le serveur HTTP, le serveur d’application et la base de données pour servir le contenu demandé par l’internaute. Ces différentes requêtes demandent non seulement du temps pour être traitées, sont sources d'attaque informatique mais surtout, génèrent des opérations au niveau des composants des équipements sollicités qui consomment de l'énergie électrique (processeur...).

Si le contenu de votre site ne nécessite pas des mises à jour fréquentes ou contient des sections ne nécessitant pas de mises à jour quotidiennes (cf. CGU, mentions légales...), il est recommandé de générer des pages statiques de votre site c'est-à-dire à les pré-calculer à l'avance et de les stocker le serveur HTTP ou le serveur de cache de manière à les diffuser à l'internaute sans avoir à solliciter le serveur d’applications ou la base de données à chaque requête.

## Green IT vous conseille

- Pour un blog avec peu d'activité, ou de petite taille, il est recommander de créer un site statique généré via un générateur de site statique (Jekyll, Hugo, Gasby, Eleventy, etc.) et de gérer le contenu via un CMS headless ou un headless flat-file CMS (Strapi, Contenful, Flextype, etc.).

Le principal avantage de cette approche est la possibilité de découpler l'édition de contenu de la partie développement technique afin d'utiliser d'autres outils plus adaptés aux besoins de votre site et qui correspondent davantage aux outils de prédilection de vos développeurs ;-)

- Pour un site ou une application web plus complexe, il est recommandé de rendre statiques uniquement les pages à faible taux de modifications en utilisant des frameworks (Next, Nuxt, Svelte, etc.).
