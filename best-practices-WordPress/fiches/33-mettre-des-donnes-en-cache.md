---
title: WP_4.33_Mettre des données en cache
people: Dominique N.
scope: Cache
responsible:
  - Code(use·ur) → Développeu·se·r
lifecycle: Intégration & Développement
priority_implementation: Moyen 👍👍
environmental_impact: Moyen 🌱🌱
saved_resources:
  - Requêtes
path: /fiches/mettre-des-donnees-en-cache
toIndex: true
---

## Sujet

WordPress propose une fonction très intéressante qu'il est bon d'avoir en tête lorsqu'on développe une fonctionnalité spécifique qui nécessite d'afficher des données en [[front-office|front]] : ==Les Transients ou données transitoires== !

Un transient est une [[api|API]] qui permet de mettre des données en [[cache]].
Cette fonctionnalité permettra de mettre en cache les données qui sont réutilisées afin de limiter le nombre de [[requete|requêtes]] permettant une optimisation de la rapidité de chargement du site qui sera aussi bénéfique pour son [[seo|SEO]].

Concrétement au chargement d'une page, Wordpress vérifie si un transient existe.

- Si ce n'est pas le cas, il va chercher la donnée puis l'afficher.
- Si c'est le cas, il va directement afficher la donnée.

**Tout n'est pas à mettre en cache !**
Pour un maximum de gain, préférez utiliser cette méthode :

- pour des contenus complexes à générer
- pour un même contenu présent sur plusieurs pages
- ou pour un contenu qui ne changera plus (transient sans délai d'expiration)

## GreenIT vous conseille

### Solution no-code 🌱

L'utilisation de l'[[api|API]] décrite ci-dessous reste une solution technique qui nécéssite de mettre les mains dans le code. Cependant, des extensions de système de cache peuvent plus ou moins finement gérer les données transitoires (voir la documentation de l'extension) sinon, des extensions complémentaires existent.

### Solution code 🌱🌱

L'API WordPress Transient s'utilise de la même manière que l'API Options. Elle ajoute cependant la notion de durée de vie. À noter qu'une donnée transitoire expirée reste en base de données et peut résulter d'une désinstallation d'extension ou de changement de thème.

Si la liste des derniers articles est affichée sur plusieurs pages, nous pouvons par exemple enregistrer cette liste (et son code html) dans un Transient. Ainsi, lors de l'affichage de ce bloque, vous n'aurez qu'une requête à faire pour ce bloc, au lieu d'une boucle qui récupère les X derniers articles.

Cette donnée transitoire pourra être remplacée lorsqu'un nouvel article sera ajouté.

## Exemple

**Sauvegarder une donnée transitoire**

`set_transient( $transient, $value, $expiration );`

---

**Récupérer une donnée transitoire**

```
if ( false === ( $valeur = get_transient($transient) ) ) {
  echo $valeur;
}
```

---

**Supprimer une donnée transitoire**

`delete_transient( $transient );`

## Principe de validation

| Le nombre           | est supérieur ou égal à |
| ------------------- | :---------------------: |
| de requêtes évitées |           70%           |

## Source

<https://developer.wordpress.org/apis/handbook/transients/>
