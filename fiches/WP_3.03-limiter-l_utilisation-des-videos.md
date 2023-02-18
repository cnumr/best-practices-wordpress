---
title: 3.03 Limiter l'utilisation des vidéos
people: Dominique N.
scope: Vidéos/Audio
responsible:
  - Code(use·ur) → Développeu·se·r
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Conception & Design
priority_implementation: Moyen 👍👍
environmental_impact: Moyen 🌱🌱
saved_resources:
  - Réseau
path: /fiches/WP_3.03-limiter-l_utilisation-des-videos
toIndex: true
---

## Sujet

**Les vidéos en ligne représentent 60 % du flux mondial de données et sont responsables de près de 1 % des émissions mondiales de gaz à effet de serre <sup>(1)</sup>.**

Par ailleurs, les règles de qualité web indiquent qu'un contenu vidéo ou audio doit être accompagné de sa transcription textuelle. Il est également recommandé de laisser le visiteur du site activer la lecture des contenus multimédias, s'il le souhaite (notamment pour des raisons d'accessibilité mais aussi de performance).

## GreenIT vous conseille

1.  Lors de la création de vos vidéos, limitez leur poids ([Compresser les médias](./WP_5.01-compresser-les-medias.md))
2.  Afin de limiter le flux des vidéos, n'incluez des vidéos que lorsque cela est nécessaire, c'est-à-dire, quand une vidéo représente une plus-value pour le contenu et/ou pour la compréhension de l'utilisateur
3.  N'utilisez pas de vidéos en fond ou tout simplement comme élément décoratif (voire point 2)
4.  Préférez ne charger la vidéo que lorsque le visiteur en fait la demande
5.  N'activez pas la lecture automatique des vidéos

> Ces recommandations sont aussi valables pour l'audio.

### Solution no-code 🌱🌱

Pour ne charger la vidéo que quand l'utilisateur en fait la demande, il existe des [[extension|extensions]] qui remplacent la vidéo dans le contenu par une image. Lorsque le visiteur indique vouloir lire le contenu, la vidéo se charge et remplace l'image. <sup>(2)</sup>

## Principe de validation

| Le nombre                         | est inférieur ou égal à |
| --------------------------------- | :---------------------: |
| de vidéos par page                |            2            |
| de vidéos chargées inutilement    |            0            |
| de vidéos lancées automatiquement |            0            |

## Source

1. Note 1 : La face cachée du numérique (page 16) : <https://librairie.ademe.fr/cadic/2351/guide-pratique-face-cachee-numerique.pdf>
2. Note 2 : <https://woofrance.fr/plugins-lazy-load-gratuits-wordpress-rapide/>
3. Intégrer un service tiers : est-ce dangereux pour la vie privée de vos visiteurs, quel impact pour l’environnement ? Le cas Youtube (Greenspector) : https://greenspector.com/fr/service-tiers-youtube/
4. Comment réduire en 5 minutes le poids d'une vidéo tout en gardant une bonne qualité : https://theshiftproject.org/guide-reduire-poids-video-5-minutes/ 