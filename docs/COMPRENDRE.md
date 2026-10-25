# Comprendre et expliquer le portfolio

## Le trajet d’une visite

Le navigateur charge un fichier HTML. Le `<head>` donne le titre, la description et les chemins vers CSS/JS. Le `<body>` contient la navigation, un `<main>` propre à la page et le pied de page. Cliquer sur `projets.html` charge un autre document : c’est un site multipage, pas une application React.

## Les trois responsabilités

- HTML : structure et sens. Un lien mène à une destination ; un bouton déclenche une action. Une section possède un titre ; chaque page possède un seul h1.
- CSS : aspect. Les variables dans `:root` centralisent les couleurs. Grid répartit les grandes zones en colonnes. Flex aligne les petits groupes. Les media queries changent ces règles selon la largeur.
- JavaScript : événements. `querySelector` récupère un élément ; `addEventListener` écoute une action ; les classes, propriétés et textes sont ensuite modifiés.

## Menu

Le bouton n’est révélé que si `showModal` existe. Au clic, le navigateur ouvre le `<dialog>`. Le focus entre dans le menu et le contenu extérieur devient inactif. Échap ou le bouton Fermer ferment le dialogue. L’événement `close` retire la classe qui bloque le scroll et replace le focus sur le bouton. La navigation HTML du haut est toujours disponible en secours.

## Filtres

Chaque bouton possède `data-filter` et chaque carte `data-category`. Au clic, le script compare les deux : une carte qui ne correspond pas reçoit `hidden`. `aria-pressed` décrit le bouton actif pour les technologies d’assistance. Le compteur est placé dans une région de statut annoncée sans déplacer le focus.

## Formulaire

`required`, `type="email"`, `minlength` et `maxlength` expriment des contraintes natives. `reportValidity()` demande au navigateur de les vérifier. `FormData` récupère les valeurs. `encodeURIComponent` transforme les caractères spéciaux afin qu’ils restent du texte dans l’URL `mailto:`. Cette URL demande l’ouverture d’une messagerie ; elle ne prouve aucun envoi.

`async`/`await` attend le résultat de la copie dans le presse-papiers. `try`/`catch` permet de proposer une copie manuelle en cas de refus. Les textes saisis ne sont jamais insérés avec `innerHTML` : le script utilise `value` ou `textContent`.

## Bouton animé

Le point est un cercle de 28 px réduit avec `transform: scale(.2)`. Sur hover ou focus-visible, il reprend sa taille et révèle la flèche. `transition` interpole entre les deux états. La préférence de réduction des mouvements désactive cette transition.

## Ce qui demande encore ton travail

L’aide à la création est indiquée dans la fiche du portfolio. Pour te l’approprier : change un filtre, explique pourquoi les liens fonctionnent sans JavaScript, puis modifie une grille responsive et vérifie le résultat. Ne présente pas une notion comme maîtrisée avant de pouvoir la reproduire et l’expliquer.
