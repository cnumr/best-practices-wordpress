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

Le Lazy Load ('chargement différé' en français) est une technique d’optimisation qui permet de charger le contenu d'une page d'un site au fur et à mesure que le visiteur la parcourt. Elle permet d'éviter de télécharger de contenus volumineux (images, vidéos, etc.) parfois non nécessaires, car non vus par le visiteur comme par exemple, si votre visiteur a atterri sur votre page par erreur ou s'il a besoin de consulter une seule partie de votre page.

> ⚠️ Avant d'utiliser cette technique, n'oubliez pas d'optimiser au préalable vos images et vidéos (voir bonnes pratiques du [[scope]] "Images"). Il permet de limiter le nombre d'images chargées inutilement.

## GreenIT vous conseille

### Solution no-code 🌱🌱

Il existe plusieurs [[extension|extensions]] WordPress permettant d'appliquer cette technique, certains proposant aussi l'optimisation des images (voir les bonnes pratiques du [[scope]] "Images").

### Solution code 🌱🌱🌱

Cependant, il est encore plus efficace d'utiliser la technique de lazy load de manière native en ajoutant l'attribut `loading=lazy` aux images et aux iframes que vous souhaitez charger progressivement.

`<img src="image.jpg" loading="lazy" />`
`<iframe src="video-player.html" title="..." loading="lazy"></iframe>`

Nota: si vous utilisez la fonction WP [get_the_post_thumbnail](https://developer.wordpress.org/reference/functions/get_the_post_thumbnail/), la balise image obtenue contiendra l'attribut `loading="lazy"` par défaut (<https://caniuse.com/?search=loading>).

Le lazy loading natif a l'avantage d'améliorer les performances globales de votre site, car il ne repose pas sur du code JavaScript en ligne ou des scripts externes.

## Principe de validation

| Le nombre                                                  | est inférieur ou égal à |
| ---------------------------------------------------------- | :---------------------: |
| d'images chargées au-dessous de la [[ligne de flottaison]] |            0            |
