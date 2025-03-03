# Javascript_et_POO

Cet atelier est un exemple de mise en œuvre des concepts de la programmation orientée objet (POO) en JavaScript (a l'aide du IA).

## Objectifs du projet

Le but de ce projet est de :
- Implémenter des classes en JavaScript.
- Utiliser des concepts comme l'héritage, la composition, et la gestion de données en utilisant des tableaux JSON.
- Créer un mini blog avec un système d'authentification et de publication de posts.

## Structure du projet

Le projet est composé de plusieurs exercices pratiques organisés en sous-dossiers :

- **EX1** : Voitures et mécanisme d'héritage.
- **EX2** : Gestion des étudiants et des professeurs.
- **EX3** : Opérations sur les vecteurs en 2D.
- **EX4** : Mini blog avec gestion de posts et utilisateurs.

**EX1**:
Le code définit une structure pour gérer des voitures à l'aide de classes et d'héritage. Voici les principales parties :

- Classe Voiture : Cette classe de base contient les informations communes à toutes les voitures : modèle, marque, année, type et carburant.

- Sous-classes Hyundai et Ford : Ces classes héritent de Voiture et ajoutent des propriétés spécifiques comme la série ou les options.

- Fonction TrierVoiture : Trie la liste des voitures par année de fabrication, de la plus ancienne à la plus récente.

<!-- La fonction TrierVoiture prend un tableau de voitures (ListeVoiture) en argument et trie ce tableau par année de fabrication, du plus ancien au plus récent. Elle utilise la méthode sort() avec une fonction de comparaison qui compare les années de chaque voiture.

javascript
Copier
function TrierVoiture(ListeVoiture) {
    return ListeVoiture.sort((a, b) => a.annee - b.annee); 
} -->

- Ajout de voitures à une liste : Des instances de Hyundai, Ford et Voiture sont créées et ajoutées à une liste.

- Affichage : Avant et après le tri, la liste des voitures est affichée avec leur marque, modèle et année de fabrication.





**EX2** :
Le code gère des objets représentant des étudiants et des professeurs et permet de trier les étudiants par leur nom et prénom. Voici les principales parties du code :

- Classe Etudiant : Cette classe contient les propriétés d'un étudiant : nom, prénom, âge et CNE (code national étudiant). Elle a également une méthode etudier() qui affiche un message indiquant que l'étudiant est en train d'étudier.

- Classe Professeur : La classe Professeur contient les propriétés d'un professeur : nom, âge et CIN (carte d'identité nationale). Elle a une méthode enseigner() qui affiche un message indiquant que le professeur enseigne.

- Création des objets : Des instances d'étudiants et de professeurs sont créées avec des informations spécifiques.

- Fonction trierEtudiants : Cette fonction trie la liste des étudiants d'abord par nom, puis par prénom si les noms sont identiques.
<!-- La fonction trierEtudiants permet de trier un tableau d'objets Etudiant en fonction de leur nom, puis de leur prénom si les noms sont identiques. Voici l'analyse détaillée :

Fonction :

function trierEtudiants(liste) {
    return liste.sort((a, b) => {
        if (a.nom === b.nom) {
            return a.prenom.localeCompare(b.prenom); 
        }
        return a.nom.localeCompare(b.nom); 
    });
}
Explication ligne par ligne :
liste.sort(...) :

La méthode sort() de JavaScript est utilisée pour trier un tableau. Elle prend en argument une fonction de comparaison.
Cette fonction est responsable de la logique de tri : elle compare deux éléments (a et b) à la fois et retourne un nombre déterminant l'ordre des éléments.
Fonction de comparaison (a, b) => {...} :

Cette fonction compare deux objets a et b qui représentent des instances de la classe Etudiant. Les éléments a et b sont extraits du tableau liste lors de l'exécution de la méthode sort().
if (a.nom === b.nom) :

On commence par vérifier si les noms des deux étudiants sont identiques.
Si les noms sont identiques (a.nom === b.nom), cela signifie qu'on doit comparer les prénoms pour savoir quel étudiant vient en premier.
return a.prenom.localeCompare(b.prenom) :

Si les noms sont identiques, on utilise localeCompare() pour comparer les prénoms (a.prenom et b.prenom).
localeCompare() est une méthode qui compare des chaînes de caractères et retourne :
Un nombre négatif si la chaîne a.prenom est avant b.prenom dans l'ordre lexicographique.
Un nombre positif si a.prenom vient après b.prenom.
0 si les prénoms sont identiques.
return a.nom.localeCompare(b.nom) :

Si les noms des étudiants ne sont pas identiques, on compare simplement les noms (a.nom et b.nom) avec localeCompare().
Le résultat de localeCompare() pour les noms va déterminer l'ordre :
Un nombre négatif signifie que a.nom vient avant b.nom.
Un nombre positif signifie que a.nom vient après b.nom.
0 signifie que les noms sont identiques, ce qui n'arrivera pas ici puisqu'on a déjà comparé les prénoms dans le cas où les noms sont égaux. -->


- Affichage : Après le tri, la liste des étudiants est affichée en montrant leur nom et prénom.

**EX4**:

Le code définit plusieurs classes pour modéliser des objets géométriques comme des vecteurs, des rectangles, des carrés et des segments. Voici les principales parties du code :

Classe Vecteur2D :

Cette classe représente un vecteur dans un plan 2D avec des coordonnées x et y.
Le constructeur initialise les coordonnées, avec des valeurs par défaut (x=0, y=0).
La méthode afficher() affiche les coordonnées du vecteur.
La méthode ajouter() permet d'ajouter un autre vecteur à ce vecteur en additionnant les coordonnées x et y respectivement.
Classe Rectangle :

Représente un rectangle avec des dimensions longueur et largeur, ainsi qu'un nom par défaut "rectangle".
La méthode afficher() affiche les dimensions du rectangle.
La méthode surface() calcule et renvoie la surface du rectangle (longueur * largeur).
Classe Carre :

Hérite de la classe Rectangle et représente un carré où la longueur et la largeur sont égales.
Le constructeur prend un paramètre cote qui est utilisé à la fois pour la longueur et la largeur.
Le nom du carré est défini comme "carre" dans cette classe.
Classe Point :

Cette classe représente un point dans un plan 2D avec des coordonnées x et y.
Classe Segment :

Représente un segment de droite entre deux points. Les deux points sont des instances de la classe Point.
Le constructeur prend les coordonnées des deux extrémités du segment et crée deux objets Point correspondants.
La méthode afficher() affiche les coordonnées des deux extrémités du segment.
Détail de l'exécution :
Création et affichage de vecteurs :

Deux objets Vecteur2D sont créés (v1 et v2) avec les coordonnées (5,6) et (4,7), respectivement.
Les deux vecteurs sont affichés avant et après l'ajout du vecteur v2 à v1, ce qui modifie les coordonnées de v1 en ajoutant celles de v2. Après addition, les nouvelles coordonnées de v1 sont (9,13).
Création et affichage de rectangles et de carrés :

Un objet Rectangle est créé avec une longueur de 5 et une largeur de 10. La surface du rectangle est calculée et affichée (50).
Un objet Carre est créé avec un côté de 4, et sa surface est également calculée et affichée (16).
Création et affichage de segments :

Un segment est créé avec les points d'origine (0, 0) et d'extrémité (3, 4). Les coordonnées du segment sont affichées.


## Technologies utilisées

- JavaScript (ES6)
- Node.js (facultatif si utilisé pour l'exécution)
- Git et GitHub pour le versionnage et la gestion du projet.