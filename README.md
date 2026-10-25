# Portfolio — Matteo Bleu-Vialon

Portfolio statique multipage en HTML, CSS et JavaScript. Aucun framework, gestionnaire de paquets, backend ou build nécessaire. Les fichiers peuvent être ouverts directement dans un navigateur.

## Consulter le site

Ouvrir `index.html` dans le navigateur, ou lancer depuis ce dossier :

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Puis ouvrir `http://localhost:8080`. Arrêter le serveur avec Ctrl+C. Le serveur est un outil local de consultation, pas le backend du site.

## Structure

- `index.html` : présentation, photo, alternance et sélection de projets.
- `projets.html` : liste et filtres des projets.
- `projet-*.html` : quatre études de cas (contexte, contribution, outils, réflexion, suite).
- `parcours.html` : expériences professionnelles, formations, qualités, langues et intérêts.
- `progression.html` : compétences reliées à des projets, apprentissages et objectifs.
- `contact.html` : coordonnées et formulaire de préparation d’e-mail.
- `credits.html` : ressources et confidentialité.
- `assets/css/style.css` : styles communs, numérotés et commentés par responsabilité.
- `assets/js/main.js` : menu, filtres et contact ; aucune dépendance.
- `assets/images/` : photo extraite du CV, favicon et schémas SVG originaux.
- `assets/documents/` : CV PDF téléchargeable.
- `docs/` : explication du code, suivi des exigences et journal de progression à compléter.
- `portfolio-project.pdf`, `portfolio-bootstrap.pdf` : sujets fournis, conservés sans modification.

## Choix de contenu et de technique

Le visiteur découvre le profil, consulte des projets, puis approfondit le parcours et la progression. Les expériences extra-scolaires sont les expériences réelles de POMPAC, Gecko Studio et Vinelem. Aucune association, certification ou expérience de sécurité professionnelle n’a été inventée.

HTML porte le contenu et la navigation ; CSS assure l’apparence et le responsive ; JavaScript enrichit le comportement. Les noms CSS utilisent des blocs et éléments explicites (`hero`, `hero__portrait`), selon une convention inspirée de BEM. Le sujet recommande des outils CSS sans les imposer. Le choix de CSS natif respecte la demande et réduit les notions nécessaires à l’explication.

Les contenus sont présents dans le HTML : ils restent lisibles sans JavaScript et sont accessibles aux moteurs de recherche. Les détails de compétences utilisent `<details>` et `<summary>`. Le menu utilise `<dialog>` pour bénéficier du comportement modal natif. Les filtres utilisent de vrais boutons. Les animations respectent `prefers-reduced-motion`.

## Formulaire : fonctionnement réel

Le formulaire valide les champs dans le navigateur. « Préparer mon e-mail » ouvre un lien `mailto:` contenant un objet et un message encodés ; le visiteur doit envoyer l’e-mail lui-même. Cela nécessite un logiciel de messagerie configuré. Aucun accusé d’envoi n’est affiché.

« Copier le message » utilise le presse-papiers si autorisé. Sinon, un champ sélectionnable permet une copie manuelle. Aucune donnée n’est stockée, et aucune soumission automatique à un service tiers n’a lieu. Sans JavaScript, les coordonnées et liens directs restent disponibles.

## Modifier le site

Modifier le texte dans le fichier HTML concerné. Pour ajouter un projet, dupliquer une fiche `projet-*.html`, adapter son titre et sa description dans `<head>`, puis ajouter la carte correspondante dans `projets.html`. Les liens sont relatifs pour fonctionner sous une URL GitHub Pages de type `/nom-du-depot/`.

Le menu et le pied de page sont répétés volontairement dans chaque page pour rester sans build et sans injection JavaScript. Toute modification de leurs liens doit être reportée dans toutes les pages. `aria-current="page"` identifie la page active ; les fiches projets utilisent la classe `is-section` sur le lien Projets.

Pour remplacer un schéma par une vraie capture, ajouter une image optimisée dans `assets/images`, adapter `src`, `width`, `height`, le texte `alt` et la légende. Ne publier aucune donnée interne sans autorisation. Les schémas présents sont explicitement identifiés comme tels.

## À compléter avec Matteo avant publication

- Relire et personnaliser les réflexions : les formulations ont été préparées à partir du CV, pas d’un entretien détaillé sur chaque difficulté rencontrée.
- Ajouter ultérieurement les vrais liens et captures des projets (report demandé par Matteo).
- Confirmer les droits de publication de la photo fournie : le CV ne mentionne pas le photographe.
- Vérifier la pertinence actuelle de la date d’alternance, des coordonnées et du CV.
- Ajouter l’URL du dépôt et l’URL définitive aux métadonnées lorsque le dépôt existera. Les URL canoniques et de partage ne sont pas inventées à l’avance.
- Faire un passage Lighthouse, une validation HTML et les vérifications manuelles ci-dessous.

## Publication automatisée prévue (non effectuée)

Le sujet prévoit une publication GitHub Pages. Aucun dépôt n’a été créé et aucun fichier n’a été publié pour cette tâche. La configuration sera faite avec Matteo lors de l’étape déploiement.

Principe : placer ce dossier à la racine d’un dépôt GitHub, puis activer GitHub Pages avec « Deploy from a branch », branche `main`, dossier `/ (root)`. Après cette configuration initiale, chaque push sur `main` republiera les fichiers automatiquement. Le site n’a pas d’étape de compilation ; aucun workflow de build personnalisé n’est nécessaire. Vérifier les intitulés et options actuels dans GitHub à ce moment-là.

Ne pas publier de fichiers temporaires, identifiants ou données de formulaire. Le `.gitignore` écarte les fichiers système courants. Le fichier `.nojekyll` indique que les fichiers statiques ne nécessitent pas de traitement Jekyll.

## Vérifications manuelles

1. Parcourir toutes les pages, liens de navigation, fil d’Ariane, cartes et CV.
2. Au clavier : Tab, Entrée, Espace ; ouvrir le menu, Échap, vérifier le retour au bouton.
3. Filtrer les projets et vérifier le nombre annoncé et les liens encore accessibles.
4. Ouvrir et fermer les catégories de compétences.
5. Contact : champs vides, e-mail invalide, texte trop court, copie et préparation d’e-mail. Ne pas envoyer de message de test réel.
6. Observer à 320, 390, 768 et 1440 px ; contrôler l’absence de débordement horizontal.
7. Activer « réduire les animations » et désactiver JavaScript : contenu et navigation doivent rester lisibles.
8. Valider chaque page HTML et auditer accessibilité/SEO avec Lighthouse. Un contrôle structurel local n’équivaut pas à un résultat W3C ou Lighthouse.

## Crédits

Contenu et photographie : CV fourni par Matteo Bleu-Vialon. Rédaction initiale, code et schémas : réalisés avec l’assistance de Codex. DA reprise du digital resume, initialement inspirée de la navigation Rogue Studio. Polices système uniquement. Aucun visuel ou code Rogue Studio n’est redistribué. Voir `credits.html`.
