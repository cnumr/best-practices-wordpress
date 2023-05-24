---
title: 3.14 Préférer les polices auto-hébergées aux polices CDN
people: Renaud H.
scope: Thèmes
responsible:
  - Code(use·ur) → Développeu·se·r
  - Designeu(se·r) /
lifecycle: Conception & Design
priority_implementation: Fort 👍👍👍
environmental_impact: Fort 🌱🌱🌱
saved_resources:
  - Stockage
  - Réseau
path: /fiches/WP_3.14-preferer-l-utilisation-de-polices-auto-hebergees-aux-polices-cdn
toIndex: true
---

## Sujet

Le style typographique est un des leviers majeurs dans la création d'une image de marque et donc il se retrouve sur le site de celle-ci. Certaines marques vont jusqu'à créer (fondre) leur propre police de caractère.

Mais, comme nous l'avons déjà abordé dans [la fiche 3.10](WP_3.10-utiliser-des-polices-de-caracteres-standards.md), les polices de caractères ont un impact non négligeable sur les performances de votre site.

En tant que Designer, dans vos créations, si vous avez le choix dans les polices de caractères, il faut prioriser de la sorte :

1. Utiliser des polices dites **Web Safe / Polices intégrées**, c'est-à-dire, utiliser des polices de caractères installées, par défaut, sur le plus grand nombre de [[terminaux]] qui n'auront pas besoin d'être téléchargées sur le terminal du visiteur lors de la navigation.
2. Utiliser des polices que votre client pourra "embarquer" dans son site et qui seront alors téléchargées sur le terminal du visiteur lors de la navigation.

**Il n'est donc pas recommandé d'utiliser des polices venant de CDN, comme le sont les Google Fonts ou Adobe Fonts.**

Et, cela pour plusieurs raisons :

- Au niveau **RGPD** : les utiliser, c'est autoriser le partage l'adresse IP du visiteur. _Il en va de même avec l'usage du reCaptcha_ ;
- Au niveau **performance**, comme les navigateurs cloisonnent le cache des sites, il n'y a plus d'avantage à utiliser cette solution et cela produit des requêtes en plus sur un autre domaine ;
- Toujours au niveau **performance**, son usage demande une bonne implémentation pour éviter le blocage de rendu le temps de se connecter au domaine et de télécharger celles-ci. Il faut ajouter `font-display:swap`, faire des prefetch.
- **Performance** toujours, afin de limiter le poids des polices à télécharger, il faut indiquer précisément les graisses, variations utilisées et se poser la question du format de police à proposer (privilégier le WOF2 qui maintenant est bien pris en charge par les navigateurs) ;
- Dernier point, les **licences d'utilisation**. Google Fonts est libre d'utilisation, mais Adobe Fonts nécessite un abonnement à Creative Cloud pour y avoir accès (dans Photoshop ou Muse par exemple) mais également pour les utiliser en ligne. Leurs utilisations, en tant que police web, nécessitent de répondre à leurs conditions d'utilisation https://helpx.adobe.com/fr/fonts/using/font-licensing.html#web-client.

## GreenIT vous conseille

### Polices sytèmes

Vous l'aurez compris, notre préférence va à l'utilisation des polices déjà présentes sur les terminaux.

### Google Fonts

Leurs usages étant libres d'utilisation, vous pouvez de ne pas utiliser la version venant de leur CDN, et donc de **les auto-héberger dans votre site 🎉**

### Adobe Fonts

Pour des raisons de licences d'utilisations, vous n'avez pas le choix, utilisez les polices venant de leur CDN 🤷‍♂️

#### Attention aux variantes

> Attention à ne télécharger et n'ajouter à vos css que les variantes utilisées. Pas besoin de la version 900 (BLACK) en italique si elle n'est pas présente dans votre charte graphique.

### Solution no-code 🌱🌱🌱

Nous vous proposons l'utilisation d'une [[extension]] WordPress [OMGF | GDPR/DSGVO Compliant, Faster Google Fonts. Easy](https://wordpress.org/plugins/host-webfonts-local/) \*

Ce plugin va détecter au fil de la consultation des pages les "Googles fonts" utilisées et vous proposer de les ajouter aux sources de votre site et faire une partie des changements de configurations pour vous (la version PRO se charge d'un plus grand nombre d'actions).

> \* Nous proposons un plugin, il y en a surement d'autres, peut-être mieux et celui-ci sera peut-être obsolette quand vous consulterez ces pages.

### Solution code 🌱🌱🌱

1. Récupérez les variantes de la police que vous voulez utiliser (cf [Attention aux variantes ci-dessus](#attention-aux-variantes))
   1. Soit directement par le site des [Google Fonts](https://fonts.google.com/) ;
   2. Soit en passant par ce service en ligne, [google-webfonts-helper](https://gwfh.mranftl.com/fonts).
2. Ajoutez-les en FTP aux sources du thème ;
3. Ajouter leurs références locales dans vos CSS.

## Principe de validation

| Le nombre                                                         | est inférieur ou égal à |
| ----------------------------------------------------------------- | :---------------------: |
| de polices directement récupérées depuis Google Fonts             |            0            |
| de polices directement récupérées depuis Adobe Fonts              |            2            |
| de variantes présentes dans les CSS et téléchargées non utilisées |            0            |

## Sources

### Performances et RGPD

- https://complianz.io/google-fonts-and-gdpr-does-it-work/
- https://www.albertovarela.net/blog/2022/11/stop-using-google-fonts/
- https://blog.runcloud.io/google-fonts-gdpr/

### Licences

- https://helpx.adobe.com/fr/fonts/using/font-licensing.html
- https://developers.google.com/fonts/faq#how_can_i_use_the_google_fonts_github

### Extensions et services

- [OMGF | GDPR/DSGVO Compliant, Faster Google Fonts. Easy](https://wordpress.org/plugins/host-webfonts-local/)
- [google-webfonts-helper](https://gwfh.mranftl.com/fonts)
