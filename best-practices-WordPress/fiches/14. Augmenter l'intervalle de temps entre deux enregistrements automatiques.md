---
title: WP_4.14_Augmenter l'intervalle de temps entre deux enregistrements automatiques
people: Dominique N.
scope: Stockage
responsible:
  - Code(use·ur) → Développeu·se·r
  - No-code → Madame et Monsieur tout le monde
lifecycle: Intégration & Développement
priority_implementation: Faible 👍
environmental_impact: Faible 🌱
saved_resources:
  - Stockage
  - Réseau
  - Requêtes
path: /fiches/augmenter-l-intervalle-de-temps-entre-deux-enregistrements-automatiques
toIndex: true
---

## Sujet

WordPress enregistre automatiquement les modifications de brouillons, d'articles et de pages au fur et à mesure des modifications à un intervalle régulier de 2 minutes par défaut.

## GreenIT vous conseille

Nous vous proposons deux alternatives pour réduire le nombre d'appels serveur et réduire l'impact sur le stockage.
Cette bonne pratique est à appliquer en complément de la fiche [Limiter le nombre de révisions](./15.%20Limiter%20le%20nombre%20de%20r%C3%A9visions.md) qui participe aussi à l'automatisation d'une partie de l'entretien de votre site [Entretenir son site régulièrement](./01.%20Entretenir%20son%20site%20régulièrement.md).

### Solution no-code 🌱

Nous vous conseillons de travailler vos textes via un traitement de texte en [[local]]. Une fois que votre texte est prêt pour la publication, vous pouvez le copier/coller, en utilisant `Ctrl + Shift + v` pour supprimer l'import de styles indésirables issus du traitement de texte et ainsi utiliser les styles de votre propre site.

### Solution code pas-à-pas 🌱

Vous pouvez aussi augmenter cet intervalle de sauvegarde pour limiter le nombre de révisions générées.
Placer cette ligne dans le fichier de configuration `wp-config.php`, via un [[ftp|serveur FTP]] :

```
// Ici l'intervalle entre deux sauvegardes est de X secondes
define('AUTOSAVE_INTERVAL', X);
```

#### Exemple

```
// Ici l'intervalle entre deux sauvegardes est de 360 secondes
define('AUTOSAVE_INTERVAL', 360);
```

## Principe de validation

| Le nombre                                                           | est inférieur ou égal à |
| ------------------------------------------------------------------- | :---------------------: |
| d'enregistrements automatiques avec un intervalle de moins de 6 min |            0            |
