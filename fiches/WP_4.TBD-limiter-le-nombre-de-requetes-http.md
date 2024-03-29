---
title: WP_4.TBD_Limiter le nombre de requêtes HTTP
people: TBD
scope: Thèmes
responsible:
  - Code(use·ur) → Développeu·se·r
  - Low-code → Freelance et développeur Front-End d'agences
lifecycle: Intégration & Développement
priority_implementation: Moyen 👍👍
environmental_impact: Moyen 🌱🌱
saved_resources:
  - Réseau
  - Requêtes
path: /fiches/WP_4.TBD-limiter-le-nombre-de-requetes-http
toIndex: false
---

## Sujet

Le temps de chargement d'une page côté navigateur est directement corrélé au nombre de fichiers que le navigateur doit télécharger, et au poids unitaire de chaque fichier.

Pour chaque fichier, le navigateur émet un GET HTTP vers le serveur.

Il attend sa réponse, puis télécharge la ressource dès qu'elle est disponible. Selon le type de serveur web que vous utilisez, plus le nombre de requêtes par page est important, moins vous pourrez servir de pages par serveur. Diminuer le nombre de requêtes par page est crucial pour réduire le nombre de serveurs HTTP (voire des serveurs d'application et de base de données) nécessaires au fonctionnement du site, et donc les impacts environnementaux associés.

## Exemple

Pour afficher des petits drapeaux pour le choix d'une langue, l'utilisation d'une spritesheet CSS permet de les regrouper dans une seule image de plus grande taille. Ce procédé réduit le nombre de requêtes HTTP.    
De même certaines images au format SVG peuvent être intégrées directement dans le HTML.

## Principe de validation

| Le nombre d'appel de ressources | est inférieur ou égal à |
| ------------------------------- | :---------------------: |
| par page                        |           40            |
