---
title: WP_1.39_Nettoyer dès l'installation
path: /fiches/nettoyer-des-l-installation
people: Florine & Dominique
scope: Fonctionnalités
responsible:
  - Code(use·ur) → Développeu·se·r, Designeu(se·r)
  - Low-code → Freelance et développeur Front-End d'agences
  - No-code → Madame et Monsieur tout le monde
lifecycle: Installation
priority_implementation: Fort 👍👍👍
environmental_impact: Moyen 🌱🌱
saved_resources:
  - Stockage
  - Réseau
  - Requêtes
toIndex: true
---

## Sujet

Par défaut, WordPress comprend déjà un certain nombre de fonctionnalités (gestion des pages, des articles et de leurs catégories, des commentaires, des médias et des utilisateurs). Lors de l'installation, celui-ci embarque également son thème du moment avec son constructeur de pages, et deux extensions.

Tout cela nécessite un grand nombre de fichiers qui pèse environ 67Mo (en version 6.0.3) sur l'hébergement.
Certaines fonctionnalités peuvent être inutiles ou avoir été définies comme non essentielles dans votre analyse préalable.

## GreenIT vous conseille

Pour éviter cette surcharge initiale, dès l'installation en [[local]] ou en ligne, nous vous invitons à faire un premier nettoyage de votre WordPress en désactivant ou supprimant, quand c'est possible, les éléments non désirés.

- Dans les actualités et les pages, il existe un premier article d'exemple et une page d'exemple, que vous pouvez supprimer définitivement ;
- L'extension Hello Dolly peut être supprimée, elle n'apporte aucune fonctionnalité essentielle.
- Si vous n'avez pas l'utilité des commentaires sur votre site, désactivez-les et supprimez l'extension Akismet Anti-spam ;
- WordPress permet de lire les emoticons (ex : :), ;), :D, etc.) pour les afficher émojis pour les visiteurs, si vous n'en avez pas l'utilité, désactivez cette fonctionnalité.
- Gutemberg anticipe l'affichage de son système de dégradé en [[front-office|front]], si votre charte graphique n'en prévoit pas, vous pouvez nettoyer la structure HTML de ces éléments superflus.

### Solution no-code 🌱🌱

**Pour désactiver les commentaires pour des contenus spécifiques**, rendez-vous dans la zone "Discussion" du contenu, puis décochez la case "Autoriser les commentaires"

**Pour désactiver les commentaires de tout le site en [[front-office|front]]**, rendez-vous dans "Réglages > Commentaires > Réglages de publication par défaut", commencez par décocher les cases précochées, aussi décochez la case "Afficer les avatars". Ensuite, il existe des extensions qui permettent de désactiver complètement les commentaires. Ainsi, la fonctionnalité n'apparaitra ni pour les visiteurs ni dans l'administration.

**Pour désactiver complètement la fonctionnalité commentaire**, utilisez une extension dédiée (vérifiez que ce paramétrage n'est pas disponible dans une autre extension déjà présente).

**Pour désactiver les Emojis**, utilisez une extension dédiée (vérifiez que ce paramétrage n'est pas disponible dans une autre extension déjà présente).

### Solution code pas-à-pas 🌱

**Nettoyer la structure des dégradés**
Ajoutez ce code dans le fichier functions.php de votre thème enfant :

`function custom_wp_remove_global_css() { remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' ); remove_action( 'wp_body_open', 'wp_global_styles_render_svg_filters' ); } add_action( 'init', 'custom_wp_remove_global_css' );`

### Solution code 🌱

**Pour désactiver les commentaires de tout le site en [[front-office|front]]**, créez votre thème enfant et surchargez les fichiers page.php et single.php pour ne plus appeler la fonction `comments_template()`;

**Pour désactiver les Emojis**, vous pouvez ajouter du code dans le functions.php de votre thème enfant tel que présenté dans la source citée.

## Principe de validation

| Le nombre                                                                                       | est inférieur ou égal à |
| ----------------------------------------------------------------------------------------------- | :---------------------: |
| de fonctionnalités, thèmes et extensions, par défaut inutiles, désactivables et/ou supprimables |            0            |

## Sources

- https://yesyouweb.com/retirer-commentaires-site-wordpress/
- https://kinsta.com/fr/base-de-connaissances/desactiver-emojis-wordpress/
