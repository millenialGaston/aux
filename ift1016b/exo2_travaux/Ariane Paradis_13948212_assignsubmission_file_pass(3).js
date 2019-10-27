/*Ariane Paradis
5 octobre 2019
Mot de passe*/

//1. On fait entrer le mot de passe à l'utilisateur


var mot=prompt("Entrez votre mot de passe");


//2.Affichage du mot de passe


print("Mot de passe:"+mot);


//3.En une opération, on assigne une variable qui vérifiera toutes les conditions de validité du mot de passe


var valide=(mot.length>=4&&mot.length<=8)&&(mot.charAt(0)!==mot.charAt(mot.length-1))&&(mot.charCodeAt(0)>=65&&mot.charCodeAt(0)<=90|mot.charCodeAt(0)>=97&&mot.charCodeAt(0)<=122)&&(mot.charCodeAt(1)>=0&&mot.charCodeAt(1)<=47||mot.charCodeAt(1)>=58&&mot.charCodeAt(1)<=64||mot.charCodeAt(1)>=123);


/*5. On vérifie la validité du mot de passe
 Si valide, on demande d'entrer à nouveau le mot de passe*/


if(valide==true) { 
    var confirmation =  prompt ("Entrez votre mot de passe une deuxieme fois"); 
    
    
//6. On créer une nouvelle variable pour voir si le mot de passe entré est identique au premier
    
    
    var Identique = (mot === confirmation);
    

/*7. Si identique, on affiche un message pour dire que le mot de passe est bien configuré
Sinon, on affichera que ce n'est pas le même message*/
    
    
    	if(Identique) { 
    		print ("Vous avez bien configuré votre mot de passe!");
    
		} else {
 		  print ("Vous n'avez pas réécrit le même mot de passe");} 
    

//4.Si les conditions de validité ne sont pas respectées, on le signale à l'utilisateur
    
    
} else {
    print ("Votre mot de passe ne respecte pas les critères de sécurité"); 
}





