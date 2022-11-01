---
title: 4.05 Utiliser une version d'image ayant taille cohérente avec son utilisation
people: Renaud H.
scope: Images
responsible:
  - Code(use·ur) → Développeu·se·r
  - Designeu(se·r)
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Intégration & Développement
priority_implementation: Fort 👍👍👍
environmental_impact: Fort 🌱🌱🌱
saved_resources:
  - Processeur
  - Mémoire vive
  - Stockage
  - Réseau
path: /fiches/WP_4.05-utiliser-une-version-d_image-ayant-taille-coherente-avec-son-utilisation
toIndex: true
---

## Sujet

Les images sont un des éléments les plus lourds des sites web. Une mauvaise compression ou **un mauvais dimensionnement de vos images auront un impact écologique négatif, ainsi que sur vos performances d'affichage et la notation Google de votre site en sera aussi pénalisée**.

Lors de l'ajout d'une image dans l'interface d'une page, il faut se poser plusieurs questions, abordées sur d'autres fiches de ce guide :

- Le type d'image (JPG, PNG, SVG, etc. voir [28. Type d'images à utiliser suivant le contexte d'utilisation](/best-practices-WordPress/fiches/28.%20Type%20d'images%20%C3%A0%20utiliser%20suivant%20le%20contexte%20d'utilisation.md) )
- La compression possible ou le nombre de couleurs embarquées
- La transparence ou non
- Et ici, la taille de l'image.

Lors de l'upload, WordPress crée d'office des versions [[vignette|vignettes]] de vos médias.

Les vignettes sont des versions de dimensions réduites de votre média initial et certaines avec des proportions différentes (carrée).

Les [[theme|thèmes]], si c'est configuré dans le code, génèrent aussi des vignettes répondant aux besoins de leur interface (une pour un affichage en grille, en mobile pour les Portfolios, une autre pour la version tablette, etc.).

Lors de la création d'un site, il est important de configurer la génération des vignettes pour optimiser et accélérer l'affichage.

Sachant que votre site va finalement n'utiliser que des versions de tailles réduites de vos images, il est aussi bon pour la planète de se poser la question lors de l'upload de votre média si une version en 2600 px est nécessaire alors que votre site n'affiche que des images de 800 px maximum. En effet, ces médias "gigantesques" resteront néanmoins stockés sur le serveur, devront transiter sur les réseaux lors de l'upload et seront conservés dans les sauvegardes de votre site.

## GreenIT vous conseille

### Solution no-code 🌱

Voici un plug-in pour créer des vignettes (`post-thumbnails`) et régénérer les images pour qu'elles soient disponibles dans WordPress : https://fr.wordpress.org/plugins/regenerate-thumbnails-advanced/

### Solution code 🌱🌱🌱

Lorsque vous créez un thème ou lorsque vous utilisez un builder de site, ajoutez à votre site cet exemple de code pour pouvoir générer et utiliser la bonne taille de vignettes suivant son contexte d'utilisation :

```php
/**
 * Add custom images size
 */
add_theme_support('post-thumbnails');

add_image_size('logo_header_size', 127, 44);
add_image_size('custom_product_size_510', 510);
add_image_size('custom_product_size_320', 320);
add_image_size('custom_product_size_396', 396);

// And then we'll add the custom size that spans the width of the blog to the Gutenberg image dropdown
add_filter('image_size_names_choose', 'mysite_custom_image_sizes');

function mysite_custom_image_sizes($sizes)
{
    return array_merge($sizes, array(
        'logo_header_size' => __('Custom header logo Size'),
        'custom_product_size_510' => __('Custom Product page Size (w:510px)'),
        'custom_product_size_320' => __('Custom Product page Size (w:320px)'),
        'custom_product_size_396' => __('Custom Product page Size (w:396px)'),
    ));
}
```

Utilisez ce plugin pour regénéner les vignettes suite à leur ajout dans la configuration : https://fr.wordpress.org/plugins/regenerate-thumbnails/

## Principe de validation

| Le nombre ...                                           | est inférieur ou égal à |
| ------------------------------------------------------- | :---------------------: |
| d'images sans une vignette adaptée à son affichage HTML |            0            |
