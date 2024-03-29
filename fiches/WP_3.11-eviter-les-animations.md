---
title: 3.11 Eviter les animations
people: Yann Gautreau
scope: Front-office
responsible:
  - Designeu(se·r)
lifecycle: Conception & Design
priority_implementation: Fort 👍👍👍
environmental_impact: Moyen 🌱🌱
saved_resources:
  - Processeur
  - Mémoire vive
path: /fiches/WP_3.11-eviter-les-animations
toIndex: true
---

## Sujet

Les animations présentes sur un site internet sont généralement là pour augmenter l'engagement de l'utilisateur, censé provoquer une émotion chez ce dernier, ce qui va augmenter son intérêt et ainsi captiver son attention. Il faut bien différencier une animation procédant de la pédagogie, à celles qui sont là uniquement dans un but esthétique. Ces dernières vont rajouter des ressources poids JavaScript et CSS non nécessaires à la lisibilité de votre projet.

## GreenIT vous conseille

- Éviter toutes animations de contenu (textes, images) par surgissement ou glissement (fade In, fadeout, etc) à l'ouverture de la page
- Ne pas utiliser les animations au déclenchement au scroll de type parallax. Ces animations peuvent sembler viables sur ordinateur mais en version mobile elles sont inutiles, même nuisibles à l'expérience utilisateur (privilégions toujours la vision mobile first, nous y avons consacré une bonne pratique).
- Privilégier les [[micro-interaction|micros-interactions]] via CSS uniquement, ces dernières vont effectivement participer à la compréhension et à l'expérience utilisateur

## Exemple

Pour aider l'utilisateur dans la navigation sur un site, par exemple, il est intéressant de signaler un changement d'état comme un boutton par une animation de [[micro-interaction]] soit au survol ou au click, n'excédant pas 0.4 seconde, utilisant les pseudos-class et la propriété `transform` (scale, rotate) au lieu d'agir sur les propriétés `height`, `width` et `position`.

## Principe de validation

| Le nombre                | est inférieur ou égal à |
| ------------------------ | :---------------------: |
| d'animations esthétiques |            0            |
