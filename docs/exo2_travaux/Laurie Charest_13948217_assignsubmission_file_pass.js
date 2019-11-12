/* 1er Octobre
Exercice noté 02 - Laurie Charest et Mary-Maxime Leclair
Création d'un programme demandant un mot de passe à l'utilisateur respectant certains critères.*/

var mot = prompt("Entrer un mot de passe.");
print("Mot de passe: "+mot);

//Vérification des conditions de validité

var valide = (mot.length <=8 && mot.length >= 4)
             && (mot.charAt(0) != mot.charAt(mot.length-1)) 
             && ((mot.charAt(0)>= "\u0041" && mot.charAt(0) <= "\u005a") 
                 || (mot.charAt(0) >= "\u0061" && mot.charAt(0) <= "\u007a"))
             && (!((mot.charAt(1)>= "\u0041" && mot.charAt(1) <= "\u005a") 
                 || (mot.charAt(1) >= "\u0061" && mot.charAt(1) <= "\u007a")
                 || (mot.charAt(1) >= "\u0030" && mot.charAt(1) <= "\u0039")));

// Le mot de passe entré respecte les critères ou non.

if(valide){
    
	var confirmation = prompt("Entrer votre mot de passe une seconde fois.");
	var identique = mot === confirmation;
      
    if(identique){
       alert("Vous avez bien configurer votre mot de passe.");
         }else{
            alert("Vous n'avez pas ré-écrit le même mot de passe.");
    }
    
 }else{
     alert("Votre mot de passe ne respecte pas les critères de sécurité.");
}






