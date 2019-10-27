/* Fichier: pass.js

Exercice noté 2

Sandrine Rochon - 5 octobre 2019*/

// Ce programme vérifie la validité d'un mot de passe entré par l'utilisateur

var mot = prompt ("Entrez un mot de passe");
print ("Mot de passe:" +mot);

             // Longueur du mot de passe entre 4 et 8 caractères
var valide = ((mot.length >= 4)&&(mot.length <= 8)
              
           // Le premier caractère du mot de passe est différent du dernier   
		   &&(mot.charAt(0)!=(mot.charAt(mot.length-1)))
              
           // Le premier caractère du mot de passe est une lettre   
           &&(((mot.charAt(0)>="A")&&(mot.charAt(0)<="Z"))
           ||((mot.charAt(0)>="a")&&(mot.charAt(0)<="z"))) 
              
           // Le deuxième caractère du mot de passe est non alphanumérique   
           &&((mot.charAt(1)<"0")||((mot.charAt(1)>"9")
           &&(mot.charAt(1)<"A"))||((mot.charAt(1)>"Z")
           &&(mot.charAt(1)<"a"))||(mot.charAt(1)>"z")));

print(valide);

// Valider le mot de passe entré
if(valide){
 	var confirmation = prompt ("Veillez confirmer le mot de passe");
    var identique = mot === confirmation;
    if (identique){
        print("Vous avez bien configuré votre mot de passe !");
    } else{
        print ("Vous n'avez pas r\u00e9\u00e9crit le même mot de passe");
                  
    }
}

// Mot de passe non conforme
else{
    print ("Votre mot de passe ne respecte par les critères de s\u00e9curit\u00e9.");
}  