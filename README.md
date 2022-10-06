<p align="center">
  <a href="https://collectif.greenit.fr/">
    <img alt="CNUMR" src="./assets/logo-cnumr.png" width="200" />
  </a>
</p>

# fiches-wordpress-greenit

> L'ensemble du référentiel : titre, fiche, règle de test, seuil de conformité et taxonomie des bonnes pratiques pour WordPress de la version 1 sont publiés sous [licence Creative Commons BY-NC-ND](LICENCE). Cela signifie que vous pouvez l'utiliser librement pour des utilisations non commerciales, à la condition de maintenir la paternité du contenu, via un lien vers https://collectif.greenit.fr et https://www.ecoconceptionweb.com.

- [Comment mettre en page une fiche](./best-practices-WordPress/template/README.md)
- [Ecoindex, plugins, badge, CLI](/Ecoindex,%20plugins,%20badge,%20CLI/README.md)
- [Guide des 'n' bonnes pratiques pour WordPress](/best-practices-WordPress/README.md)
- [Personas / profils ciblés](./personnas/README.md)
- [Lexique](./lexique/Lexique.md)

## Branches du repo

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

[Introduction sur git et quelle est l'organisation mise en place](./best-practices-WordPress/README.md#comment-créer-ou-mettre-à-jour-des-fiches-sur-le-repository-git)
