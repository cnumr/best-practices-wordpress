---
title: Guide des 'n' bonnes pratiques pour WordPress
---

# Guide des 'n' bonnes pratiques pour WordPress

<mark>Lien vers la mailling list : https://groups.google.com/g/greenit--wordpress</mark>

## [Préface de la publication](./fiches/0.%20Pr%C3%A9face.md)

## Fiches

## Comment créer une nouvelle fiche ou éditer une fiche

Lire [ici](./template/README.md).

## Comment créer ou mettre à jour des fiches sur le repository GIT

Pour ceux qui ne sont pas à l'aise avec Git, voici un petit tour d'horizon où vous trouverez des notions et des mots du patois Git.

> Ceux qui connaissent GIT par cœur n'apprendront rien dans cette première partie et peuvent aller directement à la proposition de worflow.

### Git, c'est quoi et comment on travaille avec ?

Git est un système de **versionning de code**, c'est-à-dire que comme Word ou autre, on a un historique des modifications du code. Le code chez nous étant le contenu des fiches.

GitHub est un des services permettant la centralisation de ces modifications. Il en existe d'autres comme GitLab, Gitea, etc.

En règle générale, on copie/`clone` (`clone` étant le mot utilisé dans le "langage de GIT") le `repository` sur son ordinateur, on fait ses modifications en local puis on les valide en faisant un `commit` (ce qui crée une version dans notre exemple avec Word) puis on pousse sa modification validée en réalisant un `push` ce qui la met à disposition des autres sur GitHub.

Quand de multiples personnes collaborent, il se peut qu'ils aient modifié les mêmes fichiers, il faut alors fusionner leurs modifications.
On fait une demande d'import de la dernière version du code présent sur GitHub (`git pull origine main`) et à ce moment-là, il y a deux scénarios possibles :

1. Git fait alors une fusion/`merge` des deux versions et ne rencontre aucun conflit qu'il ne sait pas résoudre tout seul.
2. Lors de cette fusion, Git n'arrive pas à résoudre tout seul les conflits, on doit alors faire soi-même le `merge`. Git fusionne les modifications et l'on doit lui indiquer quelle est la bonne version, ligne à ligne. Une fois cela fait, on valide/commit et l'on pousse/`push` sur GitHub.

Une autre notion dans GIT est importante, les `branch`(es).
Il y a une `branch`(e) centrale qui est définie comme la "bonne version", chez nous, la `branch`(e) **main**.

Dans les équipes de développement, on a l'habitude de travailler chacun dans son coin. Chacun crée sa propre `branch`(e) puis quand on a fini, on transfère ces modifications à un responsable qui se charge de valider et fusionner sa branche.
Pour ce faire, on crée une branche dans laquelle on fait toutes ces modifications. On commit et l'on `push` régulièrement et lorsqu'on a fini, on fait une demande de fusion/validation. Ce que l'on appelle un `Pull Request` (PR) sur GitHub ou une `Merge Request` (MR) sur GitLab.
Ainsi le validateur regarde le contenu de la branche, il valide que les modifications sont valides, qu'elles correspondent aux normes par exemple.

- S'il n'est pas satisfait, il commente la PR et vous demande de faire des modifications. Vous faites les modifications demandées, puis nouveau `commit`+`push` et vous lui redemandez de regarder, en commentant la PR déjà ouverte.
- S'il est satisfait, il va réaliser lui-même la fusion de cette branche dans la `branch` **main**.

Voilà rapidement un aperçu du travail en équipe avec Git et GitHub.

#### Pour en savoir plus sur Git

Voici une liste de lien expliquant en détail les notions dont j'ai parlé :

- Rudiments de Git https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Rudiments-de-Git
- `clone` (section **Cloner un dépôt existant**) https://git-scm.com/book/fr/v2/Les-bases-de-Git-D%C3%A9marrer-un-d%C3%A9p%C3%B4t-Git
- `branch` https://git-scm.com/book/fr/v2/Les-branches-avec-Git-Les-branches-en-bref
- `commit` (section **Valider vos modifications**) https://git-scm.com/book/fr/v2/Les-bases-de-Git-Enregistrer-des-modifications-dans-le-d%C3%A9p%C3%B4t
- `push` (section **Pousser son travail sur un dépôt distant**) https://git-scm.com/book/fr/v2/Les-bases-de-Git-Travailler-avec-des-d%C3%A9p%C3%B4ts-distants

### Workflow

Afin que vous n'ayez pas à réaliser vous-même les fusions, ce qui est assez pénible et afin que nous assurions la conformité du code, nous vous demandons de travailler avec des branches et que vous ouvriez des PR pour que nous les fusionnions dans la branche principale **main**.

### Branches du repo

- `main`: Branche principale des fiches (Release) ;
- `develop`: Branche des fiches à valider (develop-fiche dans le diagramme) ;
- `site-gatsby-generator`: Branche principale du site en Gatsby (Release) ;
- `develop-site-gatsby`: Branch du site à valider ;
- `feat/*`: Convention de nommage de branche pour les évolutions de fiches ;
- `feat-site/*`: Convention de nommage de branche pour les évolutions du site.

```mermaid
  gitGraph
       commit id: "init"
       commit id: "create branches" type:HIGHLIGHT
       branch develop-fiche
       branch site-gatsby-generator

       checkout develop-fiche
       commit id: "change fiche 1"
       commit id: "change fiche 2"
       checkout site-gatsby-generator
       commit id: "Init Gatsby" tag:"v0" type:HIGHLIGHT
       branch develop-site-gatsby
       commit
       checkout develop-site-gatsby
       commit
       commit
       checkout site-gatsby-generator
       merge develop-site-gatsby tag:"Site Release-1"
       checkout main
       merge develop-fiche tag:"Fiches Release-1"
       checkout site-gatsby-generator
       merge main
       checkout develop-fiche
       commit id: "change fiche 3"
       commit id: "change fiche 4"
       checkout develop-site-gatsby
       commit
       commit
       commit
       checkout site-gatsby-generator
       merge develop-site-gatsby tag:"Site Release-2"
       checkout main
       merge develop-fiche tag:"Fiches Release-2"
       checkout site-gatsby-generator
       merge main
       checkout develop-fiche
       commit id: "change fiche 5"
       commit id: "change fiche 6"
       checkout develop-fiche
       commit id: "change fiche 7"
       checkout main
       merge develop-fiche tag:"Fiches Release-3"
       checkout site-gatsby-generator
       merge main
       checkout develop-site-gatsby
       commit
       commit
       checkout site-gatsby-generator
       merge develop-site-gatsby tag:"Site Release-3"
       checkout develop-fiche
       commit id: "change fiche n"
       #merge main
```

<!--
## Worflow avec les Status

1. TO DO
2. DOING
3. TO VALIDATE
4. DONE 🚀

## Liste des fiches WordPress

| Fiches                                                                                                                                                                       | People                       | Famille           | Status        |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------- | :---------------- | ------------- |
| [01. Entretenir son site régulièrement](./fiches/01.%20Entretenir%20son%20site%20r%C3%A9guli%C3%A8rement.md)                                                                 | Catherine G. <br>Franklin L. | `Front-Office`    | `TO VALIDATE` |
| [02. Limiter l'autocomplétion lors d'une recherche](./fiches/02.%20Limiter%20l'autocompl%C3%A9tion%20lors%20d'une%20recherche.md)                                            | Renaud H.                    | `Front-Office`    | `TO VALIDATE` |
| [03. Formulaires de contact](./fiches/03.%20Formulaires%20de%20contact.md)                                                                                                   | Catherine G.                 | `Fonctionnalités` | `TO VALIDATE` |
| [04. Mesurer l'impact environnemental](./fiches/04.%20Mesurer%20l'impact%20environnemental.md)                                                                               | `TBD`                        | `Thèmes`          | `TODO`        |
| [05. Préférer la pagination au défilement infini](./fiches/05.%20Pr%C3%A9f%C3%A9rer%20la%20pagination%20au%20d%C3%A9filement%20infini.md)                                    | Dominique N.                 | `Front-Office`    | `TO VALIDATE`        |
| [06. Ajouter les éléments de caching dans le HtAccess](./fiches/06.%20Ajouter%20les%20%C3%A9l%C3%A9ments%20de%20caching%20dans%20le%20HtAccess.md)                           | Dominique N.                 | `Cache`           | `DOING`        |
| [08. Limiter l'utilisation des vidéos](./fiches/08.%20Limiter%20l'utilisation%20des%20vid%C3%A9os.md)                                                                        | Dominique N.                 | `Vidéo / Audio`   | `TO VALIDATE`        |
| [09. Ne pas afficher les flux des réseaux sociaux](./fiches/09.%20Ne%20pas%20afficher%20les%20flux%20des%20r%C3%A9seaux%20sociaux.md)                                        | Dominique N.                 | `Fonctionnalités` | `TO VALIDATE`        |
| [10. Limiter le nombre d'extensions](./fiches/10.%20Limiter%20le%20nombre%20d'extensions.md)                                                                                 | Yann K.                      | `Fonctionnalités` | `DOING`       |
| [11. Eliminer les fonctionnalités non essentielles](./fiches/11.%20Eliminer%20les%20fonctionnalit%C3%A9s%20non%20essentielles.md)                                            | Renaud H.                    | `Fonctionnalités` | `TO VALIDATE` |
| [12. Utiliser un système Cache](./fiches/12.%20Utiliser%20un%20syst%C3%A8me%20Cache.md)                                                                                      | Franklin L.                  | `Cache`           | `TO VALIDATE` |
| [13. Ne pas afficher les documents à l'intérieur des pages](./fiches/13.%20Ne%20pas%20afficher%20les%20documents%20%C3%A0%20l'int%C3%A9rieur%20des%20pages.md)               | Yann K.                      | `Documents`       | `DOING`       |
| [14. Augmenter l'intervale de temps entre deux sauvegardes automatiques](./fiches/14.%20Augmenter%20l'intervale%20de%20temps%20entre%20deux%20sauvegardes%20automatiques.md) | Dominique N.                 | `Stockage`        | `TO VALIDATE` |
| [15. Limiter le nombre de révisions](./fiches/15.%20Limiter%20le%20nombre%20de%20r%C3%A9visions.md)                                                                          | Dominique N.                 | `Stockage`        | `TO VALIDATE` |
| [16. Sécuriser l'accès à l'administration](./fiches/16.%20S%C3%A9curiser%20l'acc%C3%A8s%20%C3%A0%20l'administration.md)                                                      | Dominique N.                 | `Sécurité`        | `TO VALIDATE`        |
| [17. Ne pas bloquer les mises à jour de sécurité automatique](./fiches/17.%20Ne%20pas%20bloquer%20les%20mises%20%C3%A0%20jour%20de%20s%C3%A9curit%C3%A9%20automatique.md)    | Yann K.                      | `Sécurité`        | `TODO`        |
| [18. Sécuriser les identifiants d'accès à l'administration](./fiches/18.%20S%C3%A9curiser%20les%20identifiants%20d'acc%C3%A8s%20%C3%A0%20l'administration.md)                | Dominique N.                 | `Sécurité`        | `TO VALIDATE`        |
| [19. Limiter le nombre de requêtes HTTP](./fiches/19.%20Limiter%20le%20nombre%20de%20requ%C3%AAtes%20HTTP.md)                                                                | Yann K.                      | `Thèmes`          | `TO VALIDATE` |
| [20. Mobile First](./fiches/20.%20Mobile%20First.md)                                                                                                                         | Renaud H.                    | `Thèmes`          | `TO VALIDATE` |
| [21. Comment choisir son thème](./fiches/21.%20Comment%20choisir%20son%20th%C3%A8me_.md)                                                                                     | Dominique N.                 | `Thèmes`          | `TO VALIDATE`       |
| [22. La taille des images](./fiches/22.%20La%20taille%20des%20images.md)                                                                                                     | Renaud H.                    | `Images`          | `DONE`        |
| [23. Le poids des images](./fiches/23.%20Le%20poids%20des%20images.md)                                                                                                       | Yann K.                      | `Images`          | `DOING`       |
| [24. Les carrousels](./fiches/24.%20CLes%20carrousels.md)                                                                             | Yann K.                 | `Images`     | `To Validate`        |
| [25. Choisir un hébergeur adapté](./fiches/25.%20Choisir%20un%20h%C3%A9bergeur%20adapt%C3%A9.md)                                                                             | Catherine G.                 | `Hébergement`     | `To Validate`        |
| [26. Chargement paresseux des images (lazy loading)](<./fiches/26.%20Chargement%20paresseux%20des%20images%20(lazy%20loading).md>)                                           | Dominique N.<br>Catherine G. | `Images`          | `To Validate`        |
| [27. Utilisez des polices de caractères standard](./fiches/27.%20Utilisez%20des%20polices%20de%20caract%C3%A8res%20standard.md)                                              | Dominique N.<br>Renaud H.    | `Thèmes`          | `TO VALIDATE` |
| [28. Type d'images à utiliser suivant le contexte d'utilisation](./fiches/28.%20Type%20d'images%20%C3%A0%20utiliser%20suivant%20le%20contexte%20d'utilisation.md)            | Renaud H.                    | `Images`          | `DONE` |
| [29. Eviter les animations](./fiches/29.%20Eviter%20les%20animations.md)                                                                                                     | Yann K.                      | `Front-Office`    | `TODO`        |
| [30. Limiter le poids des fichiers CSS](./fiches/30.%20Limiter%20le%20poids%20des%20fichiers%20CSS.md)                                                                       | Yann K.                      | `Thèmes`          | `TODO`        |
| [31. Limiter le poids des fichiers JS](./fiches/31.%20Limiter%20le%20poids%20des%20fichiers%20JS.md)                                                                         | Yann K.                      | `Thèmes`          | `TODO`        |
| [32. Services tiers en général](./fiches/32.%20Services%20tiers%20en%20g%C3%A9n%C3%A9ral.md)                                                                                 | Yann K.                      | `Thèmes`          | `TODO`        |
| [33. Mettre des données en cache](./fiches/33.%20Mettre%20des%20donn%C3%A9es%20en%20cache.md)                                                                                | Dominique N.                 | `Cache`           | `To Validate`       |

## Liste des fiches non-WordPress

- [07. Utiliser une version de headless / sans tête](./fiches/07.%20Utiliser%20une%20version%20de%20headless%20_%20sans%20t%C3%AAte.md)

-->
