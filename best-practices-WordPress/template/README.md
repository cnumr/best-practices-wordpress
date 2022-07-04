# Comment créer une fiche

## Template de fiche

Utiliser le template présent [ici](./TEMPLATE.md).

Il est découpé en deux blocs, le premier est encadré par des `---`.

Dans cette première partie, vous trouverez les métadas qui peuvent servir à utiliser les fichiers markdown pour génrérer des sites (cf. [frontmatter](https://frontmatter.codes)).

Dans la deuxième partie se trouve le contenu de la fiche elle-même, au format `cnumr / best-practices` que vous trouverez [ici](https://github.com/cnumr/best-practices).

## Medias utilisé(s) dans la fiche

Les médias doivent être regroupés par fiche dans un dossier au format suivant `medias_<numero de la fiche>`

## Ajouter la fiche à la liste des fiches

Lorsque vous créez/éditez une fiche, il faut mettre à jour [la page les listants](../README.md). Il faut y reporter les métadatas de la fiche.

## Métadatas de la fiche

- `title`: \<NUM de la fiche>. \<NOM de la fiche>
- `path`: /fiches/\<slug de la fiche>
- `people`: \<Noms des particpants>
- `scope`: \<Famille de la fiche>
  - Cache
  - Documents
  - Fonctionnalités
  - Front-Office
  - Hébergement
  - Images
  - Sécurité
  - Stockage
  - Thèmes
  - Vidéos/Audio
- `state_validation`: <Status le création de la fiche>
  - 1 - TO DO
  - 2 - DOING
  - 3 - TO VALIDATE
  - 4 - DONE 🚀
- `responsible`: <Liste des cible(s) visé(s), Personnas concernée(s)>
  - Code(use·ur) → Développeu·se·r
  - Designeu(se·r)
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
- `lifecycle`: <Phase de "conception" concernée>
  - 1 - En amont
  - 2 - Conception / Design
  - 3 - Développement
  - 4 - Mise en ligne
  - 5 - Maintenance
- `complexity_implementation`: <Niveau de difficulté de mise en œuvre>
  - Facile 🐣
  - Standard 😁
  - Difficile 😅
- `priority_implementation`: <Priorité de mise en œuvre>
  - Faible 👍
  - Moyen 👍👍
  - Fort 👍👍👍
- `environmental_impact`: <Niveau de l'impact écologique>
  - Faible 🌱
  - Moyen 🌱🌱
  - Fort 🌱🌱🌱
- `saved_resources`: <liste des ressources économisées>
  - Processeur
  - Mémoire vive
  - Stockage
  - Réseau
  - Requêtes
