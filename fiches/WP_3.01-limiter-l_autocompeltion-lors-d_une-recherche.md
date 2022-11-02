---
title: 3.01 Limiter l'autocomplétion lors d'une recherche
people: Renaud H.
scope: Front-office
responsible:
  - Code(use·ur) → Développeu·se·r
  - Designeu(se·r)
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Conception & Design
priority_implementation: Fort 👍👍👍
environmental_impact: Fort 🌱🌱🌱
saved_resources:
  - Processeur
  - Mémoire vive
  - Stockage
  - Réseau
  - Requêtes
path: /fiches/WP_3.01-limiter-l_autocompeltion-lors-d_une-recherche
toIndex: true
---

## Sujet

![Exemple avec Google](./medias_02/pict1.png)

La suggestion de réponse au moment de la saisie dans un champ de recherche (ou de toute liste) est pratique, mais à un réel impact réseau ainsi que sur les processeurs du serveur comme sur celui de la machine utilisée par le visiteur du site.

Pour faire simple, **à chaque caractère saisi, une demande est envoyée au serveur, qui fait alors une requête en base pour rechercher le terme**. Sur WordPress, si la requête n'est pas filtrée, elle recherchera sur les diverses entités présentent (Post, Comments, etc.) et elle retournera les plus pertinentes qu'elle aura donc comparées et triées. Une fois cette recherche effectuée, le résultat est retourné comme liste qui s'affiche dans le navigateur.

**Ce n'est donc pas un type de fonctionnalité à privilégier**.

## GreenIT vous conseille

Si elle est jugée indispensable, il y a des paramètres sur lesquelles on peut jouer pour limiter l'impact :

- Augmenter le nombre de caractères à saisir avant de faire la première requête. La moyenne du nombre de caractères des mots en français étant de 4 (ou 5 suivant les sources), on peut donc configurer ce nombre de caractères minimal à 6.
- On peut aussi omettre les mots de moins de 3-4 caractères et ainsi n'envoyer que les mots "pertinents" et ne pas rechercher les articles ou mots de coordination (de, du, ils, or...).
- Cloisonner la recherche à certains types de posts, au titre, etc.
- **Il faut privilégier l'utilisation de [[extension|extensions]] spécialisés et proposant de réaliser des recherches sur l'indexation qu'ils auront faite de votre site**. Les index sont des bases de données optimisées pour la recherche. Elles contiennent les mots contenus par votre site qui sont sauvegardés, avec le nombre d'occurrences trouvées pour celui-ci et les pages liées et qui n'est mis à jour que lorsque le site est lui-même mis à jour. Tout le travail de "recherche" est donc fait lors de la création/mise à jour de l'index suivant les paramètres configurés et préoptimisés. Lors de la recherche utilisateur, le plug-in fait ses requêtes sur cette base/table spécifique et optimisée, ce qui allège la charge serveur et qui à l'avantage d'être aussi beaucoup plus rapide.

## Principe de validation

| Le nombre                 | est inférieur ou égal à |
| ------------------------- | :---------------------: |
| de champ d'autocomplétion |            1            |
