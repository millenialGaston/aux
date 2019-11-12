//Devoir #2 remis par Camille Sylvestre, 5 octobre 2019.

// demander à l'utilisateur de créer un mdp.
var mot = prompt("Veuillez entrer un mot de passe. Il devra contenir: \n1. Entre 4 et 8 caractères. \n2. Le premier caractère doit être différent du dernier.  \n3. Le premier caractère doit être une lettre.\n4. Le deuxième caractère n'est pas alphanumérique.");
print("Mot de passe: "+mot);

//identification des variables nécessaires aux conditions.
var nombreC = mot.length;
var premierC = mot.charAt(0);
var dernierC = mot.charAt(nombreC-1);
var secondC = mot.charAt(1);
var symboles = ".!/$%?&*()-+_|\#«»°':;{}<>[]^";

var conditionUn = (nombreC>=4 && nombreC<=8);
var conditionDeux = (premierC.toLowerCase() !== dernierC.toLowerCase());
var conditionTrois = (premierC.toLowerCase() !== premierC.toUpperCase());
var conditionQuatre = (symboles.includes(secondC) == true);

//vérification des conditions
if (conditionUn && conditionDeux && conditionTrois && conditionQuatre) {
 var valide = true;
} else {
	var valide = false;
}


//vérifier que le mot de passe est valide.
if (valide == true) { 

// confirmation du mot de passe.
var confirmation = prompt("Veuillez entrer votre mot de passe à nouveau.");
var identique = (mot == confirmation);

if (identique == true) {
print("Vous avez bien confirmé votre mot de passe.");
} else {
    print("Vous n'avez pas réécrit le même mot de passe.");
}
} 

//si le mdp n'est pas valide
else {
print("Votre mot de passe ne respecte pas les critères de sécurité.");
}
