// Exercice noté #2, effectué par Marie-Janne Blouin et Cléo St-Martin, mardi 1er octobre 2019

//Ce programme demande à l'usager de configurer 
//un mot de passe en respectant certains
//critères de sécurité


// Entrée du mot de passe par l'utilisateur


var mot = prompt("Entrez votre mot de passe"); 

print ("Mot de passe: " + mot);


// Vérification des conditions de validité et confirmation du mot de passe, le cas échéant


var valide = ((mot.length >= 4 && mot.length <= 8) 				//Le mot de passe est-il entre 4 et 8 caractères?
   	     && (mot.charAt(0) != mot.charAt(mot.length-1)) 			//Le premier caractère est-il différent du dernier?
  	     && (mot.charAt(0) >= "\u0041" && mot.charAt(0) <= "\u005A" 	//Le premier caractère est-il une lettre?
  	     || mot.charAt(0) >= "\u0061" && mot.charAt(0) <= "\u007A") 
  	     && (!(mot.charAt(1) >= "\u0041" && mot.charAt(1) <= "\u005A" 	//Le deuxième caractère est-il non-alphanumérique?
  	     || mot.charAt(1) >= "\u0061" && mot.charAt(1) <= "\u007A" 
  	     || mot.charAt(1) >= "u\0031" && motcharAt(1) <= "u\0039")));

if (valide){
    	var confirmation = prompt("Entrez votre mot de passe à nouveau");
   	var identique = (confirmation == mot);

} else {
    var valide = false;
    print("Votre mot de passe ne respecte pas les critères de sécurité");
}
 
   
// Vérifier si les deux mots entrés sont identiques


if (identique){
    print("Vouz avez bien configuré votre mot de passe!");

} else { 
    var identique = false;
    print("Vous n'avez pas réécrit le même mot de passe");
}
