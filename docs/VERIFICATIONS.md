# Vérifications de la première version — 25 octobre 2026

Effectuées :
- Nu Html Checker 26.10.12 exécuté localement sur les dix pages HTML : aucune erreur après correction des options du formulaire.
- Nu Html Checker, contrôle CSS : aucune erreur.
- `node --check assets/js/main.js` : aucune erreur de syntaxe.
- Contrôle structurel local : un h1 par page, identifiants uniques, alternatives d’images présentes, fichiers locaux et ancres référencées existants.
- Aperçu HTTP local : réponse 200.
- Chrome : observation de l’accueil et du formulaire en grand écran, ouverture du menu, filtre Design affichant uniquement Maison LUA et compteur « 1 projet affiché ».

Limites de cette vérification :
- Contrôles visuels mobiles repris après le redémarrage de Chrome : accueil à 320 px et formulaire à 390 px. Ils ne constituent pas une revue exhaustive de toutes les pages et tailles.
- Aucun résultat Lighthouse n’est revendiqué.
- Formulaire : champs requis bloquants, sélection du sujet et copie d’un message de démonstration vérifiés dans Chrome. L’ouverture effective de la messagerie reste dépendante de la configuration du visiteur ; aucun e-mail n’a été envoyé.
- Les liens externes et les droits de la photo ne sont pas vérifiés par les contrôles locaux.

Les styles responsive, préférences de mouvement réduit et comportements de secours sont implémentés. Utiliser la liste de vérification du README pour une revue complète avant publication.
