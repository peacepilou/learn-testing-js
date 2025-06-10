# Tests unitaires en JavaScript ☕️ 
Tu as plusieurs algos déjà écrits. Ton objectif va être d'en écrire les tests unitaires.

## Algo 1 : FormatName
Consignes de tests : 
1.  Tester avec un prénom et un nom valides
2.	Tester avec un prénom vide
3.	Tester avec un nom vide
4.	Tester avec des espaces inutiles autour des noms
5.	Tester avec les deux vides (résultat attendu : chaîne vide)


## Algo 2 : IsPalindrome
Consignes de tests : 
1.	Tester un vrai palindrome simple ("kayak")
2.	Tester avec majuscules et ponctuation ("Engage le jeu que je le gagne !")
3.	Tester une chaîne vide ou nulle
4.	Tester un mot qui n’est pas un palindrome


## Algo 3 : ExtractDomain
À toi de réfléchir : quels cas doivent être testés pour valider cet algo ?


## Algo 4 : GetNextMonday
À toi de réfléchir : quels cas doivent être testés pour valider cet algo ?


## Algo 5 - CalculateBMI
Spécifications pour les tests de la fonction calculateBMI à faire en TDD :

1. La fonction doit retourner la valeur correcte de l’IMC pour des entrées valides(poids en kg, taille en mètres).
2. Elle doit gérer les cas standards(ex : 70kg, 1.75m)
3. Elle doit gérer les cas limites, comme des poids ou tailles très faibles ou très élevés.
4. Si le poids ou la taille est nul, négatif ou non numérique, la fonction doit retourner NaN.
5. Si un ou plusieurs arguments sont manquants, la fonction doit retourner NaN.
6. La fonction ne doit pas lancer d’exception pour des entrées invalides, mais retourner NaN.
7. Les résultats doivent être cohérents avec la formule IMC = poids / (taille * taille).



## Pour lancer les tests : 
```bash
npm test <algo-name>
```
Exemple :
```bash
npm test algo5_calculateBMI
```