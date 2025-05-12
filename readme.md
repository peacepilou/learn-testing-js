# Tests d'intégration avec Angular ☕️
Tu as plusieurs algos déjà écrits. Ton objectif va être d'en écrire les tests d'intégration.

## Exemple 1 : UserService
Rends-toi dans le dossier `src/app/example_1`. Consignes de tests : 
1.	Vérifier qu’un appel `GET` est bien émis vers `/api/users`
2.	Vérifier que le tableau retourné contient bien les données attendues
3.	Utiliser `HttpTestingController` pour simuler la réponse du backend


## Exemple 2 : Todo
Rends-toi dans le dossier `src/app/example_2`
Le composant TodoComponent affiche une liste de tâches et permet d’en ajouter une.
Ce que tu dois faire :
1. Ben là c'est à toi de réfléchir aux tests pertinents à ajouter
2. Tu vas avoir besoin de `fixture.nativeElement`



## Exemple 3 – TDD : Affichage conditionnel des produits en promotion
Rends-toi dans le dossier `src/app/example_3` Tu veux afficher une liste de produits. Si un produit est en promotion (promo: true), tu affiches “🔥 En promo !” à côté de son nom.

🧭 Étapes à suivre :
1.	Écris un premier test (qui échoue) pour afficher un produit sans promo
2.	Ajoute le minimum de code HTML / TS pour le faire passer
3.	Ajoute un test avec un produit en promo
4.	Modifie le template pour afficher “🔥 En promo !”
5.	Ajoute des cas limites (pas de produits, promo false, etc.)