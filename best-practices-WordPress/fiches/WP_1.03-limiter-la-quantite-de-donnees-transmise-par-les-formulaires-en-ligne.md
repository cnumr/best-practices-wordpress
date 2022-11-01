---
title: WP_1.03_Limiter la quantité de données transmise par les formulaires en ligne
people: Catherine G. & Dominique N.
scope: Fonctionnalités
responsible:
  - Low-code → Freelance et développeur Front-End d'agences
lifecycle: Analyse des besoins
priority_implementation: Fort 👍👍👍
environmental_impact: Moyen 🌱🌱
saved_resources:
  - Stockage
  - Réseau
path: /fiches/WP_1.03-limiter-la-quantite-de-donnees-transmise-par-les-formulaires-en-ligne
toIndex: true
---

## Sujet

Il est répandu de trouver un formulaire de contact, sur une page dédiée ou sur toutes les pages (dans le pied de page) d'un site. Cela peut-être au bénéfice de votre organisation, mais souvent au détriment de l'utilisateur et/ou de la législation (RGPD).

Comme pour toute fonctionnalité ajoutée à votre site, il est essentiel de s'interroger sur la finalité de votre formulaire et de l'utilité des données collectées. S'il s'avère qu'aucune alternative ne soit satisfaisante (numéro de téléphone ou adresse email directe par exemple) et que la mise en place de formulaires ne puisse être évitée, il faudra être vigilant à n'imposer aucun champ superflu à vos utilisateurs.
Lors de la réflexion autour de ce(s) formulaire(s), il faudra aussi décider si vous stockez les données dans votre base de données, si vous les envoyez par email, ou les deux.

### Données personnelles et réglementation

Le RGPD (règlement général sur la protection des données), créé en avril 2016, puis effectif en mai 2018, défini un cadre de protection et de transparence concernant l'utilisation des données personnelles.
Ce règlement impose, entre autres, qu'aucune donnée demandée ne soit inutile, ou en tout cas, de prouver sa nécessité lors d'un contrôle. Vous devez dans ce cadre, demander le consentement éclairé à vos utilisateurs des données qu'ils vous transmettent.
Cela permet d'aller vers un numérique plus responsable, et sert l'écoconception en limitant le poids des formulaires, du stockage des données et l'empreinte de leurs fonctionnements.

### Ecoconception

#### Stocker les données dans votre base de données

Si vous ne veillez pas à la sécurité (Voir la fiche "Sécuriser les formulaires en ligne.md") et/ou au tri des données traitées, le poids de la base de données pourra grossir vite : plus la base est lourde, plus le serveur de stockage demande de ressources et de maintenance.

#### Transmettre les données par email

12 milliards d'emails (hors spams) sont échangés chaque heure, soit l’équivalent de 4 000 allers-retours entre Paris et New York en avion.

> ⚠️ Expédier un mail nécessite deux fois plus d'énergie que pour le stocker pendant un an.

**Quoi qu'il en soit, mettre en place les deux solutions en parallèle n'est pas recommandé**

## GreenIT vous conseille

- Préférer l'affichage de vos coordonnées directes en premier lieu
- Être vigilant à ne demander que les informations nécessaires au traitement de la demande (ne pas demander de date de naissance pour une demande de contact simple par exemple)
- Sécuriser vos formulaires
- Veiller à stocker vos messages reçus dans la base de données, plutôt que de les envoyer par email (moins il y a de mails qui transitent, mieux c'est)
- Veiller à nettoyer votre base de données des messages traités
- Veiller à ce que tous les utilisateurs puissent utiliser vos formulaires (conforme au RGAA)

## Principe de validation

| Le nombre                                           | est inférieur ou égal à |
| --------------------------------------------------- | :---------------------: |
| de formulaire en ligne par site                     |            2            |
| de données non nécessaires demandées par formulaire |            0            |
| de données stockées depuis plus de 90 jours         |            0            |

## Sources

[Le RGESN rejoint le RGAA et le RGPD pour un numérique responsable !](https://www.24joursdeweb.fr/2021/le-rgesn-rejoint-le-rgaa-et-le-rgpd-pour-un-numerique-responsable/)
[Le guide d'un numérique plus responsable - Bela Loto Hiffler](https://librairie.ademe.fr/consommer-autrement/4197-le-guide-d-un-numerique-plus-responsable-9791029714191.html)
