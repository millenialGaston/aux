//Noémie Olmand IFT1016-B
//Exercices 1 Réalisation d'un programme 
//qui demande la création d'un mot de passe respectant certaines conditions
//Veuillez inscrire votre mot de passe

var mot = prompt("Mot de passe");
print(mot);
//Conditions de validité//
var valide =((mot.charAt(0)!= mot.charAt(7))&&((mot.length >=4)&& (mot.length <=8))) && 
    ((((mot.charAt(0)>= "a")&& (mot.charAt(0)<="z"))||
     ((mot.charAt(0)>="A")&& (mot.charAt(0)<="Z")))&&
     (((mot.charCodeAt(1)>= 33) && (mot.charCodeAt(1)<=47))||
      ( (mot.charCodeAt(1)>= 58) && (mot.charCodeAt(1)<=64)))) ;



if (valide==true){
    var confirmation = prompt ("Veuillez confirmer votre mot de passe");
    print(confirmation);
} else if (valide != true) {
    alert ("Votre mot de passe ne respecte pas les critères de sécurité");
	print ("Votre mot de passe ne respecte pas les critères de sécurité");}

var identique = confirmation == mot ;
 if (identique ==true) {
     alert ("Vous avez bien configuré votre mot de passe !");
     print ("Vous avez bien configuré votre mot de passe !");
 }else { 
     alert ( "Vous n'avez pas réécrit le même mot de passe");
     print ( "Vous n'avez pas réécrit le même mot de passe");
 }

    
   
    
