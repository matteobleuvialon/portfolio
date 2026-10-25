# Portfolio — Matteo Bleu-Vialon

Portfolio personnel développé en HTML, CSS et JavaScript dans le cadre de mon parcours à Epitech.

Ce site présente mon parcours, mes expériences professionnelles, mes projets et l'évolution de mes compétences en développement informatique. Il rassemble aussi bien mes réalisations passées dans le web et le design que mes apprentissages actuels en programmation.

L'objectif était de construire un site simple à maintenir, responsive et accessible, sans dépendre d'un framework ou d'une infrastructure complexe.

**[Consulter le portfolio](https://matteobleuvialon.github.io/portfolio/)**

## Technologies utilisées

Le portfolio repose sur trois technologies :

- **HTML5** : structure des pages, contenu et navigation.
- **CSS3** : identité visuelle, mise en page, responsive design et animations.
- **JavaScript (ES6+)** : navigation mobile, filtres de projets et interactions du formulaire de contact.

Le site fonctionne sans framework, sans bibliothèque externe et sans gestionnaire de paquets. Aucun serveur applicatif ni aucune base de données ne sont nécessaires.

L'hébergement est assuré gratuitement par **GitHub Pages**, avec une publication automatique à chaque mise à jour de la branche `main`.

## Contenu du portfolio

Le site s'organise autour de plusieurs sections complémentaires.

**Accueil**

Présentation de mon profil, de mon parcours actuel et de mes principaux projets. Cette page permet d'accéder rapidement aux différentes parties du portfolio.

**Projets**

Présentation détaillée de plusieurs réalisations, notamment POMPAC, Vinelem, mon portfolio et un projet développé avec Lua.

Chaque fiche présente le contexte du projet, les technologies utilisées, mon implication et les enseignements tirés de sa réalisation. Des filtres permettent de parcourir plus facilement les projets.

**Parcours**

Retour sur mes expériences professionnelles, mes formations et les compétences acquises au fil de mon parcours.

**Progression**

Suivi de mon apprentissage technique, des notions abordées et des compétences que je cherche à développer. Cette section évoluera au fur et à mesure de mes formations et de mes projets.

**Contact**

Mise à disposition de mes coordonnées et d'un formulaire permettant de préparer un message depuis le logiciel de messagerie du visiteur.

## Organisation des fichiers

Le projet est organisé de manière à séparer le contenu, les styles, les scripts et les ressources.

```text
portfolio/
├── index.html
├── projets.html
├── parcours.html
├── progression.html
├── contact.html
├── credits.html
│
├── projet-maison-lua.html
├── projet-pompac.html
├── projet-portfolio.html
├── projet-vinelem.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   └── documents/
│
├── docs/
│   ├── COMPRENDRE.md
│   ├── SUIVI.md
│   └── VERIFICATIONS.md
│
├── .gitignore
├── .nojekyll
└── README.md
```

Les fichiers HTML correspondent aux différentes pages du site. Les ressources partagées sont regroupées dans `assets/` afin de faciliter leur réutilisation.

Le dossier `docs/` contient des notes sur le fonctionnement du code, le suivi du projet et les vérifications techniques.

## Installation et utilisation en local

Le portfolio étant entièrement statique, aucune installation de dépendances n'est nécessaire.

### 1. Récupérer le projet

```bash
git clone https://github.com/matteobleuvialon/portfolio.git
```

### 2. Accéder au dossier

```bash
cd portfolio
```

### 3. Lancer le site

Il est possible d'ouvrir directement `index.html` dans un navigateur.

Pour travailler avec un serveur HTTP local, utiliser Python :

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Le site est alors accessible à l'adresse :

**http://localhost:8080**

Pour arrêter le serveur, utiliser `Ctrl + C` dans le terminal.

Ce serveur sert uniquement à consulter et tester le site localement. Il ne constitue pas un backend.

## Choix techniques

### Une architecture volontairement simple

J'ai choisi de développer ce portfolio sans framework afin de travailler directement avec les fondamentaux du développement web.

Cette approche permet de comprendre précisément le rôle de chaque technologie et de garder la maîtrise de la structure des pages, des styles et des interactions.

Le contenu principal est intégré directement dans le HTML. Il reste ainsi disponible indépendamment de l'exécution de JavaScript.

### Organisation du CSS

Les styles sont centralisés dans `assets/css/style.css` et regroupés par composants et responsabilités.

Le nommage des classes reprend certains principes de la méthodologie BEM, avec des noms explicites comme `hero` ou `hero__portrait`.

Ce fonctionnement facilite la lecture du code et limite les conflits entre les différentes sections.

### JavaScript sans dépendances

Le fichier `assets/js/main.js` regroupe les fonctionnalités interactives du site :

- Ouverture et fermeture du menu mobile.
- Filtrage des projets.
- Validation du formulaire de contact.
- Préparation des e-mails.
- Copie du message dans le presse-papiers.

Les fonctionnalités s'appuient sur les API natives du navigateur.

### Navigation et accessibilité

Une attention particulière a été portée à la structure HTML et à l'utilisation d'éléments adaptés à chaque interaction.

Le site utilise notamment :

- Des éléments HTML sémantiques.
- Des boutons pour les actions interactives.
- Les éléments `<details>` et `<summary>` pour les contenus dépliables.
- L'élément `<dialog>` pour le menu mobile.
- L'attribut `aria-current` pour identifier la page active.
- La préférence `prefers-reduced-motion` pour limiter les animations lorsque l'utilisateur le souhaite.

L'objectif est de conserver une navigation compréhensible sur ordinateur comme sur mobile, y compris au clavier.

## Fonctionnement du formulaire de contact

Le formulaire fonctionne entièrement côté navigateur et ne transmet aucune donnée à un serveur.

Lorsqu'un visiteur remplit les champs et sélectionne **« Préparer mon e-mail »**, JavaScript vérifie les informations renseignées et génère un lien `mailto:`.

Ce lien ouvre le logiciel de messagerie configuré sur l'appareil, avec un objet et un message préremplis. Le visiteur reste responsable de l'envoi.

Une seconde option permet de copier le message pour l'utiliser dans un autre service de messagerie.

Le formulaire ne stocke aucune information dans une base de données et n'effectue aucun envoi automatique.

## Maintenance et évolutions

Le site a été conçu pour pouvoir évoluer progressivement.

### Modifier une page

Les contenus se trouvent directement dans les fichiers HTML correspondants. Une modification de texte ou de mise en page ne nécessite donc aucune compilation.

### Ajouter un projet

Pour ajouter une nouvelle réalisation :

1. Créer une nouvelle page HTML en reprenant la structure d'une fiche existante.
2. Adapter son contenu, son titre et ses métadonnées.
3. Ajouter les éventuels visuels dans `assets/images/`.
4. Ajouter une carte et un lien vers la nouvelle fiche dans `projets.html`.
5. Vérifier la navigation et l'affichage sur différentes tailles d'écran.

Le menu et le pied de page sont présents directement dans chaque fichier HTML. Leurs modifications doivent donc être reportées sur les différentes pages concernées.

### Axes d'amélioration

Le portfolio continuera d'évoluer avec mon parcours. Les prochaines améliorations envisagées concernent notamment :

- L'ajout de nouveaux projets techniques.
- L'intégration de captures et de démonstrations des réalisations.
- L'enrichissement des fiches projets avec davantage de retours d'expérience.
- L'amélioration continue de l'accessibilité et des performances.
- L'actualisation régulière du parcours et des compétences.

## Hébergement et déploiement

Le portfolio est hébergé sur GitHub Pages.

**Dépôt GitHub :**  
https://github.com/matteobleuvialon/portfolio

**Site en ligne :**  
https://matteobleuvialon.github.io/portfolio/

La publication est configurée depuis la branche `main`, avec le dossier racine `/` comme source.

Pour publier des modifications :

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages prend ensuite en charge le redéploiement du site.

Les liens internes utilisent des chemins relatifs afin de fonctionner avec l'URL du dépôt GitHub Pages.

Le fichier `.nojekyll` désactive le traitement Jekyll, qui n'est pas nécessaire au fonctionnement de ce projet.

## Vérifications techniques

Les principaux points à contrôler après une modification ou un déploiement sont :

- **Navigation :** liens internes, fiches projets, menu mobile et téléchargement du CV.
- **Responsive :** affichage sur mobile, tablette et ordinateur, sans débordement horizontal.
- **Interactions :** filtres de projets, contenus dépliables et formulaire de contact.
- **Accessibilité :** navigation au clavier, contraste des couleurs, alternatives textuelles et comportement des animations.
- **Compatibilité :** consultation avec JavaScript désactivé pour vérifier l'accès au contenu principal.
- **Qualité :** validation HTML et audits de performance, d'accessibilité et de référencement avec les outils appropriés.

Ces contrôles permettent de repérer les problèmes introduits lors des évolutions du site.

## Ressources et crédits

Le contenu du portfolio s'appuie sur mon parcours, mes expériences et mes réalisations. Les schémas SVG ont été conçus pour illustrer les projets présentés.

L'identité visuelle reprend certains éléments de mon univers graphique, avec une inspiration issue de différentes références de design web, notamment la navigation de Rogue Studio.

Aucun visuel ni code provenant de ce site n'est redistribué.

Les informations complémentaires sur les ressources utilisées et la confidentialité sont disponibles sur la page [Crédits](https://matteobleuvialon.github.io/portfolio/credits.html).

---

**Matteo Bleu-Vialon**  
Étudiant à Epitech — Développement informatique, cybersécurité et cloud.