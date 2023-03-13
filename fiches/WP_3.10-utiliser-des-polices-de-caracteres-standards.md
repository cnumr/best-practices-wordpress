---
title: 3.10 Utiliser des polices de caractères standards
people: Dominique N. & Renaud H.
scope: Thèmes
responsible:
  - Code(use·ur) → Développeu·se·r
  - Designeu(se·r) /
lifecycle: Conception & Design
priority_implementation: Fort 👍👍👍
environmental_impact: Fort 🌱🌱🌱
saved_resources:
  - Processeur
  - Mémoire vive
  - Stockage
  - Réseau
path: /fiches/WP_3.10-utiliser-des-polices-de-caracteres-standards
toIndex: true
---

## Sujet

Afin de donner un style personnalisé à son site, un des leviers est d'utiliser des polices de caractères spécifiques en les déclarant dans les feuilles de styles ou les styles inline (`CSS`) comme : `font-family: "Gill Sans Extrabold", Arial, sans-serif;`.

Pour que la "Gill Sans Extrabold", si nous poursuivons notre exemple plus haut, s'affiche correctement pour l'utilisateur, il faut qu'elle soit installée sur le terminal (ordinateur, tablette ou mobile) de l'utilisateur ou téléchargée automatiquement lors de l'affichage du site via un import `HTML` ou `CSS`, si la police n'est pas disponible le navigateur utilisera l'Arial et sinon la police `sans-serif` par défaut de votre navigateur sera affichée (polices [fallbacks (EN)](https://www.w3schools.com/cssref/css_fonts_fallbacks.asp)).

Gardez également en tête que toutes les polices ne seront pas forcément aussi lisibles les unes que les autres. Ainsi, par exemple, les polices à empattement seront souvent plus difficiles à lire pour les personnes souffrant de dyslexie.

Pour résumé, il est possible :

- D'utiliser des polices de caractères installées, par défaut, sur le plus grand nombre de [[terminaux]] (polices intégrées ou Web safe)
- De mettre à disposition lors du chargement du site vos polices de caractères que l'utilisateur va télécharger automatiquement en naviguant sur votre site (polices hébergées localement)

> **Utilisation de Google Fonts ou Adobe Fonts**
>
> Nous avons rédigé une fiche dédiée à ce sujet → [WP_3.14 Préférer les polices auto-hébergées aux Google et Adobe Fonts](WP_3.14-preferer-l-utilisation-de-polices-auto-hebergees-aux-polices-cdn.md).

## GreenIT vous conseille

**La solution la plus sobre et écologique est la dernière de la liste, à savoir les polices web-safe, limitant ainsi les requêtes et les téléchargements inutiles.** Cependant, la liste des polices disponible partout est [limitée (EN)](https://www.w3schools.com/cssref/css_websafe_fonts.asp). Vous trouverez quelques exemples d'utilisation sur [https://kinsta.com/fr/blog/polices-caracteres-web-safe](https://kinsta.com/fr/blog/polices-caracteres-web-safe).

### Solution no-code 🌱🌱🌱

Nous vous déconseillons l'installation d'[[extension]] pour l'ajout de typographies. Nous vous invitons plutôt à privilégier un thème utilisant déjà des polices web safe ou que celui-ci permette dans ses options de personnalisation, la modification des typographies utilisées.

### Solution code 🌱🌱🌱

Via l'éditeur de `CSS`, vous pouvez modifier les polices de caractères utilisées d'un thème comme par exemple :

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

Si vous avez réellement besoin d'une police de caractères spécifiques, nous vous invitons à inclure dans votre thème un dossier `font` avec le fichier de la police à installer. Avec l'ajout en `CSS`, par exemple :

```css
@font-face{
  font-family: ‘Lato';
  src: url( “fonts/Lato.woff”) format(‘woff’);
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

> ⚠️ Il existe différents formats de police (Woff2, woff, ttf, otf, etc). "Les développeurs des principaux navigateurs se sont mis d'accord sur l'utilisation du format Web Open Font Format (woff) comme standard". Du point de vue de la compression, le format woff2 est légèrement plus performant que le format woff.

> ⚠️ Une font, police de caractères, typographie, existe en plusieurs graisses (light, regular, italic, bold, black, etc). Nous vous recommandons d'utiliser `<b>` ou `<strong>`, `<i>` ou `<em>` et les propriétés `CSS` qui en découle pour éviter le requêtage, le poids et le téléchargement de fichiers supplémentaires. S'il est d'une nécessité absolue d'avoir les fichiers à minima deux graisses d'une police alors, nous vous recommandons l'utilisation d'une police variable.

## Principe de validation

| Le nombre                                                                                                                                             | est inférieur ou égal à |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------: |
| de polices de caractères différentes sur le site (y compris les variables de graisse et les polices d'icônes)                                         |            3            |
| de polices de caractères téléchargées automatiquement par le navigateur de l'utilisateur (y compris les variables de graisse et les polices d'icônes) |            1            |

## Sources

- https://www.w3schools.com/cssref/css_fonts_fallbacks.asp
- https://google-webfonts-helper.herokuapp.com/fonts
- https://www.w3schools.com/cssref/css_websafe_fonts.asp
- https://kinsta.com/fr/blog/comment-changer-polices-wordpress/
- https://fr.wikipedia.org/wiki/Typographie_sur_le_Web/
