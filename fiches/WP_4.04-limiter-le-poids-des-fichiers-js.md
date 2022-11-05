---
title: 4.04 Limiter le poids des fichiers JS
people: Yann K.
scope: Thèmes
responsible:
  - Code(use·ur) → Développeu·se·r
  - Low-code → Freelance et développeur Front-End d'agences
lifecycle: Intégration & Développement
priority_implementation: Faible 👍
environmental_impact: Faible 🌱
saved_resources:
  - Réseau
  - Requêtes
path: /fiches/WP_4.04-limiter-le-poids-des-fichiers-js
toIndex: true
---

## Sujet

Selon [HTTP Archive (EN)](https://httparchive.org/reports/page-weight), d'octobre 2022, le JavaScript représente environ 22% du poids d'une page Web.
En 5 ans, son poids a augmenté de plus de 43%, limiter son poids et son utilisation est devenu un levier pour réduire l'impact environnemental des sites.

## GreenIT vous conseille

### Solution no-code 🌱

L'une des solutions les plus simples à mettre en place pour réduire le poids des fichiers est la [minification des fichiers JavaScript](https://checklists.opquast.com/fr/assurance-qualite-web/les-scripts-du-site-sont-minifies).
De nombreuses extensions proposent cette fonctionnalité : WP Rocket, WP-Optimize, Autoptimize ou W3 Total Cache par exemple.

### Solution code 🌱🌱🌱

Afin d'optimiser au mieux le poids des fichiers JavaScript, il est conseillé de réaliser de multiples fichiers à utiliser sur le front-office du site en fonction des besoins.

## Principe de validation

| Le nombre                           | est inférieur ou égal à |
| ----------------------------------- | :---------------------: |
| de fichiers JavaScript non minifiés |            0            |
