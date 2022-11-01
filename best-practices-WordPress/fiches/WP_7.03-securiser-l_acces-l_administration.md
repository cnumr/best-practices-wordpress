---
title: 7.03 Sécuriser l'accès à l'administration
people: Dominique N.
scope: Sécurité
responsible:
  - Code(use·ur) → Développeu·se·r
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Mise en ligne
priority_implementation: Fort 👍👍👍
environmental_impact: Moyen 🌱🌱
saved_resources:
  - Stockage
  - Réseau
  - Requêtes
path: /fiches/WP_7.03-securiser-l_acces-l_administration
toIndex: true
---

## Sujet

WordPress est une plateforme internationale et largement utilisée, le chemin d'accès classique à l'administration est `/wp-admin` ou `/wp-login.php`.

N'importe qui peut donc accéder à cette adresse connue, surtout en vue d'actes malveillants, et ce, quelle que soit la taille de votre site ou de votre structure. Les avantages d'intrusion dans un site internet sont multiples, les fiches du scope "Sécurité" traitent de cela plus en détail.

De ce fait, les tentatives de connexions malveillantes sont très courantes, selon une étude publiée par Wordfence<sup>1</sup>. Ces connexions affectent l'ensemble du réseau et le serveur où est hébergé votre site.

## GreenIT vous conseille

1. Modifier le chemin d'accès à l'interface d'administration par une url non standard (ni `/admin`, ni `/administration`).
2. Avoir des identifiants de connexions forts (ne pas avoir d'identifiant `admin` avec un mot de passe `1234`)
3. Limiter le nombre de tentatives de connexion à l'administration. Si un robot ne peut pas proposer des couples "identifiant/mot de passe" plus de 3 fois sur votre site avant de ne plus y être autorisé, cela limite fortement les risques de connexions malveillantes.

Afin de garantir la sécurité de votre site, nous ne proposerons pas de code.
En effet, plusieurs extensions, éprouvées et sûres, vous permettent de réaliser ces conseils.

## Exemple

### Remplacez l'url d'accès à l'admin par :

- une chaine aléatoire sans majuscule : `/ze62ane96`, `/o6_jhej639`, `/dj5zjaih2-ep8e`
- un ou plusieurs mots en rapport avec votre activité : `/construire`, `/jouer`, `/preparer-le-menu`
- ou cumuler les deux : `/jouer_562fg6`

### Ne pas utiliser comme identifiant :

- admin
- nom de domaine du site
- prénom ou nom du dirigeant de l'entreprise

### Un mot de passe sécurisé comporte :

- au moins 8 caractères
- des lettres minuscules et majuscules
- des caractères spéciaux
- est changé régulièrement

## Principe de validation

| Le nombre                                                                                        | est inférieur ou égal à |
| ------------------------------------------------------------------------------------------------ | :---------------------: |
| de page donnant accès à l'interface d'administration avec l'url classique                        |            0            |
| de page donnant accès à l'interface d'administration une url simple                              |            0            |
| d'utilisateur ayant un identifiant de connexion simple                                           |            0            |
| d'utilisateur ayant un mot de passe de connexion simple                                          |            0            |
| d'utilisateur ayant un couple "identifiant / mot de passe" déjà utilisé sur d'autres plateformes |            0            |
| d'utilisateur ayant un mot de passe changé il y a plus de 90 jours                               |            0            |
| de tentative d'accès à l'administration erroné                                                   |            3            |

## Sources

1. Note 1 : <https://www.wordfence.com/blog/2021/01/the-wordfence-2020-wordpress-threat-report/>(EN), Résumé <https://www.blogdumoderateur.com/wordpress-attaques-menaces-securite/> (FR)
