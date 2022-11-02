---
title: 8.01 Entretenir son site régulièrement
people: Catherine G. / Franklin L.
scope: Front-office
responsible:
  - Code(use·ur) → Développeu·se·r
  - Designeu(se·r)
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Maintenance
priority_implementation: Fort 👍👍👍
environmental_impact: Fort 🌱🌱🌱
saved_resources:
  - Processeur
  - Mémoire vive
  - Stockage
  - Réseau
  - Requêtes
path: /fiches/WP_8.01-entretenir-son-site-regulierement
toIndex: true
---

## Sujet

Entretenir son site WordPress régulièrement est essentiel non seulement pour garantir son bon fonctionnement et améliorer l'expérience utilisateur, mais aussi pour réduire son empreinte environnementale. Avec le temps, le contenu et les fonctionnalités (dont [[extension|extensions]]) s’accumulent, et le risque d’afficher et de stocker des informations inutiles, obsolètes, voire contre-productives s’intensifie.

Ne pas entretenir son site est problématique, pouvant :

- causer un mauvais référencement de votre site ;
- donner une mauvaise image de votre organisme (entreprise, association, etc.), de votre service ou de votre produit ;
- ralentir le chargement du site et ainsi dégrader l’expérience utilisateur ;
- perdre ses visiteurs en affichant des informations inutiles;
- consommer inutilement des ressources (dont de l’énergie) pour le stockage de données inutilisées ;
- créer des incompatibilités avec d’autres outils installés jusqu'au possible crash sur votre site ;
- être source d’attaques informatiques.

## Green IT vous conseille

Il faut prévoir dès l'installation, un plan de maintenance de votre site comprenant autant les mises à jour régulières des différents éléments que leur suppression à la manière du ménage régulier et du ménage de printemps ou de l'entretien d'un jardin.

### Solution no-code 🌱🌱🌱

> ⚠️ Avant toute suppression, n'hésitez pas à sauvegarder votre site et votre base de données sur un disque dur ou une clé USB.

- **Mettre à jour régulièrement les [[extension|extensions]], les [[theme|thèmes]] et WordPress**. Néanmoins, veillez à vous assurer que ces mises à jour soient compatibles entre elles. Nous évoquons ce point dans le [[scope]] sécurité de ce référentiel. (voire Sécuriser votre site)

- **Supprimer les fichiers multimédias inutilisés stockés en bibliothèque**. Dès que vous mettez à jour une image ou modifiez ses caractéristiques, pensez à supprimer aussitôt les anciennes versions pour ne pas les stocker inutilement en mémoire. Il existe des [[extension|extensions]] permettant l'automatisation de cette tâche cependant l'installation d'une extension supplémentaire a un coût environnemental ([Limiter le nombre d'extensions](./WP_3.05-limiter-le-nombre-d_extensions.md)).

- **Supprimer les thèmes et extensions non utilisés ou désactivés**. La désactivation n'est pas la suppression/désinstallation.

- **Supprimer régulièrement les pages inutiles ou tout contenu obsolète** comme par exemple un post sur un fait d’actualité qui a plus de 1 an ou une page décrivant un service que vous ne proposez plus. Au risque de générer des pages 404 (page introuvable), la frustration des utilisateurs et d'entacher votre référencement, il vous faudra aussi penser à supprimer, les liens de renvoi vers le contenu supprimé présent dans d'autres pages. Pour vous aider dans la détection de liens cassés, vous pouvez utiliser [Google Search Console](https://search.google.com/search-console), [Bing](https://www.bing.com/webmasters/help/URL-Inspection-55a30305) ou des services tel que [W3C](https://validator.w3.org/checklink) ou des extensions pour votre navigateur ou cette fonctionnalité est peut-être déjà présente dans une extension déjà installée. Si vous installez une extension spécifique, sachez que ce type d'extension peut faire tourner votre CPU et ralentir votre site inutilement. Sachant que vous n'en avez pas besoin à tout instant, nous vous recommandons de l'installer et désinstaller au besoin.

- **Supprimer toutes fonctionnalités sous-employées ou non nécessaires**. 70 % des fonctionnalités demandées par les utilisateurs ne sont pas essentielles et 45 % ne sont jamais utilisées, d’après plusieurs études (Cast Software et Standish Group, notamment). (voire Eliminer les fonctionnalités non essentielles)

- **Nettoyer votre base de données**. Tous les éléments installés, puis supprimés, laissent dans la base de données des résidus, en plus des informations dues au fonctionnement de WordPress tel que les commentaires indésirables, les fichiers CSS et JS inutilisés, les brouillons, les anciens contenus supprimés et les données non approuvées, les trackbacks (rétroliens), les pingbacks, etc. Plusieurs extensions existent pour vous aider dans cette tâche, aussi cette fonctionnalité peut déjà être présente dans votre extension de mise en cache de votre site par exemple. Une partie est automatisable en appliquant d'autres bonnes pratiques en phase d'installation ou de développement comme [Nettoyer dès l'installation](./WP_1.02-nettoyer-des-l_installation.md) ou encore [Limiter le nombre de révisions](./WP_4.03-limiter-le-nombre-de-revisions.md).

- **Supprimer les anciennes sauvegardes automatiques et manuelles obsolètes**. Il n'y a pas lieu de collectionner des sauvegardes de votre site et de votre base de données, donc assez lourdes, qui sont obsolètes par rapport à votre site actuellement en production, c'est-à-dire, en ligne.

## Principe de validation

| Le nombre                                                            | est inférieur ou égal à |
| -------------------------------------------------------------------- | :---------------------: |
| de mises à jour en attente                                           |            0            |
| de médias stockés non utilisés                                       |            0            |
| de fonctionnalités, thèmes et extensions désactivés ou sous-utilisés |            0            |
| de pages, contenus et/ou sauvegardes obsolètes collectionnés         |            0            |
| d'élements inutilisés dans la base de données                        |            0            |
