---
title: WP_3.37_Utiliser le constructeur de pages Gutenberg
people: Yann G.
scope: Fonctionnalités
responsible:
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Conception & Design
priority_implementation: Fort 👍👍👍
environmental_impact: Moyen 🌱🌱
saved_resources:
  - Stockage
  - Réseau
path: /fiches/WP_3.37-utiliser-le-constructeur-de-pages-gutenberg
toIndex: true
---

## Sujet

La question des constructeurs de pages est au cœur de l'intégration de votre contenu, voire même de la construction de votre thème. Avant le développement de votre projet, vous devez réfléchir à la stratégie d'édition de contenu. Par défaut, WordPress fonctionne avec l'éditeur Gutenberg.
Un constructeur de pages additionnel (par ex. Elementor, Divi, GeneratePress etc.) va "enrichir" les possibilités de mise en page, mais il va surtout **alourdir** de manière très conséquente le poids des pages en surchargeant le CSS et **complexifier** la structure HTML de votre page. En adoptant le ["Mobil first"](/20.%20Concevoir%20vos%20sites%20en%20Mobile%20First.md), les mises en pages complexes et animées proposées par Elementor sembleront beaucoup moins utiles et attrayantes dégradant l'expérience utilisateur.

## GreenIT vous conseille

### Solution no-code 🌱🌱

Une revue rapide permet de constater que l'ensemble des blocs les plus couramment utilisés sont à notre disposition dans Gutenberg : titre Hn, images, vidéos, colonnes, boutons, etc. Les différents blocs sont parfaitement personnalisables (couleurs, typographies, etc.) dans le volet "Réglages" de l'éditeur.
Vous pouvez tester Gutemberg et voir l'ensemble des blocs disponibles ici : https://fr.wordpress.org/gutenberg/

> La plupart des blocs sont utilisables pour un site e-commerce fonctionnant avec l'extension WooCommerce.

## Solution code 🌱🌱

WordPress vous permet de développer vos propres blocs Gutenberg personnalisés et réutilisables, via la fonction `registerBlockType()`.

## Principe de validation

| Le nombre                                                  | est inférieur ou égal à |
| ---------------------------------------------------------- | :---------------------: |
| de constructeurs de pages, autres que Gutenberg, installés |            0            |

## Source

- https://fr.wordpress.org/gutenberg/
- https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
