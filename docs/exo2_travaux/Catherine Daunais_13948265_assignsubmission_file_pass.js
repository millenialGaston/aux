// 25 septembre 2019
// Amanda Tanguay et Catherine Daunais
// Exercice noté 2

// Demander mot de passe
 
   var mot = prompt("Mot de passe: ");
     print("Mot de passe: " +mot);

//Validation mot de passe

   var valide = mot.length >= 4 && mot.length <= 8 && mot.charAt(0) != mot.charAt(mot.length-1) && (mot.charAt(0)>="A" && mot.charAt(0)<="Z" || mot.charAt(0)>="a" && mot.charAt(0)<="z") && (!(mot.charAt(1)>="A" && mot.charAt(1)<="z") || (mot.charAt(1)>="0" && mot.charAt(1)<="9")); 

if ( valide == true) {

var confirmation = prompt ("Entrez le mot de passe une deuxième fois: ");
 
var identique = confirmation == mot;  
 
if ( identique == true) {

	  print ("Vous avez bien configuré votre mot de passe !");

} else if (identique == false) {

print ("Vous n’avez pas réécrit le même mot de passe");
}

} else if ( valide == false) {

print ("Votre  mot  de passe  ne  respecte  pas  les  critères  de sécurité");
 
}

