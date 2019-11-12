//Eloy Clara
//Le 27/09/2019
//Exercice noté 02 : Mot de passe

//Entrée du mot de passe
var mot = prompt("Entrez un mot de passe");
print("Mot de passe : " + mot);

//Calcul de la validité du mot de passe
var valide = (mot.length >= 4 && mot.length <= 8) && 
    (mot.charAt(0) != mot.charAt(mot.length - 1)) && 
    ((mot.charAt(0) >= "A" && mot.charAt(0) <= "Z") || 
     (mot.charAt(0) >= "a" && mot.charAt(0) <= "z")) && 
    ((mot.charAt(1) < "A" || mot.charAt(1) > "Z") && 
     (mot.charAt(1) < "a" || mot.charAt(1) > "z") && 
     (mot.charAt(1) < "0" || mot.charAt(1) > "9"));

//Si le mot de passe est valide, demander à l'utilisateur de l'entrer une seconde fois.
if (valide == true) {
    var confirmation = prompt("Entrez le mot de passe une seconde fois :");
}

//Si le mot de passe n'est pas valide, afficher le message suivant.
else {
    alert("Votre mot de passe ne respecte pas les critères de sécurité");
}

//Vérifier que la seconde entrée du mot de passe est identique à la première entrée 
var identique = (confirmation === mot);

//Selon que le mot de passe est identique ou non, afficher le message correspondant.
if (identique == true) {
    alert("Vous avez bien configuré votre mot de passe !");
} else {
    alert("Vous n'avez pas réécrit le même mot de passe");
}

