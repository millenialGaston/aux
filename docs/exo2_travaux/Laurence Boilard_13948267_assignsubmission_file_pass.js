//Laurence Boilard, 1 octobre 2019
//Fichier: pass.js (Exercice noté #2)

//Ce programme vise à vérifier la validité d'un mot de passe entré par un utilisateur

//Entrer le mot de passe
var mot = prompt("Entrez un mot de passe");
print("Mot de passe: " + mot);

//Critères de validité du mot de passe
var minlength = mot.length >=4;
var maxlength = mot.length <=8;
var length = minlength && maxlength;
var firstVSlast = mot.charAt(0) != mot.charAt(mot.length-1);
var firstIsLetter = (mot.charAt(0) >= "a" && mot.charAt(0) <= "z") || (mot.charAt(0) >= "A" && mot.charAt(0) <= "Z");
var secondIsNotLetter = (mot.charAt(1) < "a" || mot.charAt(1) > "z") && ( mot.charAt(1) < "A" || mot.charAt(1) > "Z");
var secondIsNotNumber = (mot.charCodeAt(1) < 48 || mot.charCodeAt(1) > 57);
var secondIsNonAlphanumerique = secondIsNotLetter && secondIsNotNumber;

//On vérifie si le mot de passe répond aux critères
var valide = length && firstVSlast && firstIsLetter && secondIsNonAlphanumerique;

//Confirmer le mot de passe
if(valide){
    var confirmation = prompt("Entrez votre mot de passe de nouveau");
    
    //On s'assure que le mot de passe de confirmation est identique au premier
    var identique = confirmation === mot;
    if(identique) {
        print("Vous avez bien configuré votre mot de passe");
    } else {
        print("Vous n'avez pas réécrit le même mot de passe");
    }
    
} else {
    print("Votre mot de passe ne respecte pas les critères de sécurité");
}


