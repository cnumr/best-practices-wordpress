---
title: 3.02 Préférer la pagination au défilement infini
people: Dominique N.
scope: Front-Office
responsible:
  - Code(use·ur) → Développeu·se·r
  - Designeu(se·r)
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Conception & Design
priority_implementation: Fort 👍👍👍
environmental_impact: Moyen 🌱🌱
saved_resources:
  - Processeur
  - Mémoire vive
  - Réseau
  - Requêtes
path: /fiches/WP_3.02-preferer-la-pagination-au-defilement-infini
toIndex: true
---

## Sujet

Lorsqu'on affiche une liste de produits, d'articles, sur notre site, il est tentant de donner la possibilité au visiteur de tout voir en faisant simplement défiler la page en chargeant le contenu petit à petit.

Cet effet de style va générer le contenu pour l'afficher au fur et à mesure. Il va donc demander au serveur les x prochains articles/produits à chaque "scroll". Cela pourra entrainer une dépense environnementale non nécessaire couplée à des problèmes de performances, de référencement naturel et de respect de l'accessibilité web.

## GreenIT vous conseille

### Solution no-code 🌱🌱

Mettez en place une pagination classique avec un système de filtre performant, le visiteur trouvera plus facilement le contenu qui l'intéresse et les robots d'indexation aussi.
Par défaut sur la page "archive blog", WordPress intégre la pagination. Vous pouvez régler le nombre de posts à afficher sur une page via l'onglet réglages sous-menu lecture, label. Les pages du site doivent afficher au plus (10 par défaut).

### Solution code 🌱🌱

Dans votre thème vous pouvez afficher la pagination via la fonction

```php
the_posts_pagination( array(
  'prev_text' => __( 'Previous Page', 'textdomain' ),
  'next_text' => __( 'Next Page', 'textdomain' ),
) );
```

> Il est aussi plus facile de respecter la réglementation (RGAA) et d'être conforme aux droits des personnes handicapées lorsqu'on utilise des structures HTML natives.

## Principe de validation

| Le nombre                              | est égal à |
| -------------------------------------- | :--------: |
| de listes avec une pagination illimité |     0      |
