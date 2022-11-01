---
title: 3.06 Ne pas afficher les documents à l'intérieur des pages
people: Yann G.
scope: Documents
responsible:
  - Low-code → Freelance et développeur Front-End d'agences
lifecycle: Conception & Design
priority_implementation: Fort 👍👍👍
environmental_impact: Moyen 🌱🌱
saved_resources:
  - Stockage
  - Réseau
path: /fiches/WP_3.06-ne-pas-afficher-les-documents-l_interieur-des-pages
toIndex: true
---

## Sujet

Lorsqu'un utilisateur affiche une page web permettant de visualiser un document (quel que soit son type : PDF, doc, xls, etc.), le chargement peut être non voulu. **Le téléchargement d'un document doit-être une décision volontaire et non imposée.**
Si l'utilisateur ne consent pas, c'est-à-dire qu'il n'a nullement l'intention de lire ou d'utiliser le document, ce téléchargement imposé représente un poids numérique, donc environnemental inutile qui sera renouvelé à chaque ouverture de la page puisque le document sera de nouveau chargé.

Un autre point non négligeable est l'incapacité pour certains navigateurs à prendre en charge cet affichage directement dans la page. En effet pour compenser cela, il faudra ajouter le système de lecture directement dans votre site, et donc alourdir encore les ressources demandées par la page.

## GreenIT vous conseille

- Proposez vos documents via un lien de téléchargements (bloc fichier dans l'éditeur Gutenberg)
- Optimiser et compresser vos documents PDF à télécharger (compresser vos documents avec des outils lors de l'export de ce dernier)
- Notifier le poids du document à côté du lien de téléchargement, ainsi que son extension
- Proposer un résumé du document à télécharger afin d'éviter les téléchargements inutiles
- Pour les documents volumineux, proposer deux versions en téléchargement (une légère et une intégrale).

## Exemple

Dans le bloc fichier dans l'éditeur Gutenberg, par défaut le fichier s'affiche en lecture dans votre page de manière automatique. Décochez "Afficher le contenu embarqué en ligne" dans le panneau réglage.

## Principe de validation

| Le nombre                                  | est inférieur ou égal à |
| ------------------------------------------ | :---------------------: |
| de documents visibles directement par page |            0            |
