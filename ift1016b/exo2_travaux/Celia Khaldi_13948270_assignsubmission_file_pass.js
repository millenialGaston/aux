//Celia Khaldi et Ghita Bardaoui, remis le 5 octobre 2019
var mot = prompt ("Entrez votre mot de passe :");
print("Mot de passe: "+mot);
var valide = (mot.length>=4&&mot.length<=8)&& 
             (mot.charAt(0)!=mot.charAt(mot.length-1))&& 
             ((mot.charAt(0)>="a"&&mot.charAt(0)<="z")||(mot.charAt(0)>="A"&&mot.charAt(0)<="Z")) && 
             (!(((mot.charAt(1)>="a")&&(mot.charAt(1)<="z"))||((mot.charAt(1)>="A")&&(mot.charAt(1)<="Z"))||((mot.charAt(1)>="0")&&(mot.charAt(1)<="9"))));
if (valide==true) {
    var confirmation = prompt ("Veuillez confirmer votre mot de passe");
           var identique = (mot==confirmation);
    if (identique==true) {
        print ("Vous avez bien configuré votre mot de passe!");
  } else {
        print ("Vous n'avez pas réecrit le même mot de passe");
}  }
else {
    print ("Votre mot de passe ne respecte pas les critères de sécurité");
}






                 

              