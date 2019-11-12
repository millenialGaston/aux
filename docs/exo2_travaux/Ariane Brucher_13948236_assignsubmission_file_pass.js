/*Autrices: Ariane Brucher et Héloïse Tanguay
Titre: Exercice noté 02 - création d'un mot de passe valide
Fichier: pass.js
Date de remise: 5 octobre 2019
Remarque: certaines parenthèses et espaces blancs, redondants au niveau fonctionnel,
ont été jugés utiles à la compréhension du code JavaScript.*/

//Ce programme demande à l'utilisateur de créer un mot de passe valide et de le confirmer.

var mot = prompt("Veuillez entrer votre mot de passe."); //Création du mot de passe

print("Mot de passe : "+mot);

var valide;
var un = ""+mot.charAt(0); //Premier caractère
var deux = ""+mot.charAt(1); //Deuxième caractère
var confirmation;
var identique;

//Conditions de validité du mot de passe:

valide = ((mot.length>=4)&&(mot.length<=8)) //Longueur entre 4 et 8 caractères
		&&((un)!=(mot.charAt(mot.length-1))) //1er caractère différent du dernier
		&&((un>="A"&&un<="Z")||(un>="a"&&un<="z")) //1er caractère est une lettre
		&&((deux<"0")||(deux>"9"&&deux<"A")||(deux>"Z"&&deux<"a")||(deux>"z")); //2e caractère non alphanumérique

//Validation du mot de passe

if(valide==true){
   confirmation = prompt("Mot de passe valide.\nVeuillez entrer votre mot de passe une deuxième fois.");
    
   identique = mot==confirmation; //Confirmation du mot de passe
    
   if(identique==true){
       print("Vous avez bien configuré votre mot de passe!"); //Le 2e mot de passe entré est identique au 1er
   }
   else{
       print("Vous n'avez pas réécrit le même mot de passe."); //Le 2e mot de passe entré est différent du 1er
   }
    
}
else{
    print("Votre mot de passe ne respecte pas les critères de sécurité"); //Mot de passe non valide
}

//Fin de l'exécution.