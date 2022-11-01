---
title: 3.09 Éviter l'utilisation de carrousels
people: Yann K.
scope: Images
responsible:
  - Designeu(se·r)
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Conception & Design
priority_implementation: Moyen 👍👍
environmental_impact: Moyen 🌱🌱
saved_resources:
  - Processeur
  - Requêtes
path: /fiches/WP_3.09-eviter-l_utilisation-de-carrousels
toIndex: true
---

## Sujet

Le carrousel, souvent utilisé pour mettre en avant de multiples contenus, montre rapidement ses limites en matière de conversion<sup>1</sup>, avec un impact négatif sur l'expérience utilisateur. Sa présence implique plusieurs points critiques :

- un alourdissement du poids des pages pour la présence de CSS et JavaScript dédié, mais également par le contenu présent sur chaque écran du carrousel<sup>2</sup> ;
- une complexité en termes d'assurance qualité web<sup>3</sup> et d'accessibilité numérique<sup>4</sup> ;
- une utilisation plus importante des ressources processeurs dans le cas d'un carrousel automatique.

## GreenIT vous conseille

Limiter au maximum l'utilisation des carrousels en privilégiant du contenu statique mis à jour régulièrement.

Dans le cas contraire :

- Mettre en place un contrôle simple et complet du composant (arrêt, écran suivant/précédent)
- Préférez un chargement progressif des images présentes dans les différents écrans _([Privilégier le chargement paresseux des images](/fiches/26-privilegier-le-chargement-paresseux-des-images-lazy-loading))_
- Préférez les animations impliquant une utilisation des ressources processeurs _([Éviter les animations](/fiches/29-eviter-les-animations))_
- Limiter le nombre d'écrans présent dans le carrousel.

## Exemple

Les balises `<img />` possède un attribut HTML `loading` qui permet nativement un chargement progressif des images.
`<img src="mon_image.webp" alt="" loading="lazy" />`

Les animations de certains attributs CSS implique un repaint/reflow des navigateurs qui demande des ressources machines, pour limiter cela préférez les animations des carrousels par la propriété CSS `transform`.

## Principe de validation

| Le nombre             | est inférieur ou égal à |
| --------------------- | :---------------------: |
| de carrousel par site |            1            |

## Sources

1. Note 1 : <https://erikrunyon.com/2013/07/carousel-interaction-stats/>

2. Note 2 : <https://wp-rocket.me/blog/why-you-shouldnt-use-a-slider-on-wordpress-and-other-performance-bad-practices/>

3. Note 3 : <https://checklists.opquast.com/fr/assurance-qualite-web/les-animations-sons-et-clignotements-peuvent-etre-mis-en-pause>

4. Note 4 : <https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#crit-4-12>
