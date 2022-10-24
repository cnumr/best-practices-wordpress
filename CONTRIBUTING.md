# Contribuer au référentiel d'écoconception WordPress 

## Qui peut être contributrice ou contributeur ?

Toute personne qui le souhaite dans le but d'améliorer la version actuelle en proposant :
- la suppression de BP (bonnes pratiques) obsolètes, non applicables ou sans effet ;
- la modification de BP existantes pour correction ou amélioration ;
- l'ajout de nouvelles BP issues du terrain ;
- la suppression de définitions dans le lexique obsolètes, non applicables ou sans effet ;
- la modification de définitions dans le lexique pour correction ou amélioration ;
- l'ajout de nouvelles définitions dans le lexique ;
- toute idée pour l'amélioration de ce référentiel ;
- toute idée pour l'amélioration du site ;
- toute idée pour l'amélioration du flux de travail ;
 en respectant les quelques règles et instructions de ce document ou en apportant son avis, expertise, expérience sur les propositions en cours dans [discussion](https://github.com/cnumr/fiches-wordpress-greenit/discussions).

## Règles de bienséance

- Tout le monde a sa place, chacun peut apporter son expérience
- Le respect, la conviviabilité, le partage et la bienveillance sont de mise
- Il n'y a pas de bonne pratique bête ou trop simple

## L'équipe de pilotage

L'équipe de pilotage est constituée de :
- Heluin Renaud
- Dominique Nicolle
- Yann Gautreau
- Yann Kozon
- Florine Sueur

Les fonctions de cette équipe sont :
- de s'assurer que les règles et instructions instaurées soient respectées ;
- en cas de désaccord, de trancher une décision par consensus ;
- de résoudre les discussions et d'initier la suite du processus par consensus ;
- de valider les `Pull Request` pour intégration au référentiel et au site par consensus *(via le `merge` de la `PR` -> `develop` -> `main` -> `site-gatsby-generator` qui déclenche le build et la publication du site)* ;
- **d'aider tout contributeur en difficulté sur Github**.

## Comment contribuer ?

Pour une meilleure organisation, nous avons établi un workflow identique pour les propositions au niveau :
- des bonnes pratiques
- des définitions du lexique

### 1.   Tout commence par une discussion !

Dans l'onglet [discussion](https://github.com/cnumr/fiches-wordpress-greenit/discussions), n'hésitez pas à regarder les discussions déjà ouvertes avant d'en créer une nouvelle, peut-être qu'une autre personne a eu la même idée que vous.

La nouvelle discussion doit :
- avoir un titre explicite,
- être catégorisée (BP, définitions, site, etc.), 
- taggée en fonction d'un ajout, d'une modification ou d'une suppression. 

Chaque contributrice et contributeur est libre de participer à la discussion et d'indiquer son accord via l'utilisation de "la flèche vers le haut" ou son désaccord, argumenté par un commentaire, avec un pouce vers le bas.

Une proposition avec plusieurs avis positifs fera l'objet d'une étude par l'équipe de pilotage qui prendra une décision par consensus, par commentaire ou réunion si nécessaire, sur les suites à donner.

Trois possibilités :
- la proposition doit être retravaillée, affinée
- la proposition est définitivement rejetée avec justification
- la proposition est validée

Une fois qu'une décision a été émise, un membre de l'équipe de pilotage clôt la discussion `answered` et crée une `issue` attachée à la discussion :
- en indiquant une liste de tâches à effectuer,
- en la taguant, 
- en l'associant à la version du référentiel et board project,
- en l'assignant au contributeur ou à une personne de la discussion volontaire pour traiter le sujet ou à un membre de l'équipe de pilotage en charge de ce sujet.

### 2.  De l'issue à la Pull Request

Dans l'onglet [Issues](https://github.com/cnumr/fiches-wordpress-greenit/issues), nous vous invitons à trier pour retrouver plus facilement celles qui vous incombent.

Dans celle-ci, nous vous invitons à créer une branche (`create a branch`) en la nommant : `feat/` + nom de l'issue. Sur cette branche, vous pouvez faire vos ajouts, modifications ou suppressions en fonction du sujet de l'issue.

**Pour tout ajout ou modification de BP, veuillez respecter le [template](https://github.com/cnumr/fiches-wordpress-greenit/blob/main/best-practices-WordPress/template/TEMPLATE.md).**

Lors de la rédaction de votre BP, nous vous recommandons d'utiliser le lexique déjà en place ou de l'augmenter en fonction de vos besoins. 
- Pour lier une définition à un mot, utilisez cette écriture : `[[nom du fichier de la définition|label à afficher]]`.
- Pour surligner une notion importante, utilisez cette écriture : `==Phrase à surligner.==`.

Une fois que vous êtes satisfait de votre proposition et que vous avez coché les tâches, il est nécessaire de faire une `Pull Request` vers `develop` associée à l'issue. Une `Pull Request` peut-être `review` par tous les participants qui souhaitent soumettre des corrections au niveau de l'orthographe, de la syntaxe, de compréhension, de vulgarisation, etc.

**Seul un consensus de l'équipe de pilotage, via un message en commentaire ou réunion si nécessaire, peut merger la `Pull Request` sur `develop`.**

## Comment contribuer avec Git directement ?

Reprendre le texte sur Git
