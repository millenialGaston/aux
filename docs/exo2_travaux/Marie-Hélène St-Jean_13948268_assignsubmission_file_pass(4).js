//Exercice noté 2. Janice Bessard et Marie-Hélène St-Jean. 01/10/2019. 
 


//Choix du mot de passe.

var mot = prompt ("Entrez votre mot de passe : ");
print("Mot de passe entré :" + " "+ mot); 



//Vérification de la validité du mot de passe. 

var valide = 
    
	// Le mot de passe contient entre 4 et 8 caractères
    (mot.length >= 4) && (mot.length <= 8) 


	// Le 1er caractère est différent du dernier
	&& (mot.charAt(0)!=(mot.length-1)) 


	// Le 1er caractère est une lettre (majuscule ou minuscule)
	&&(((""+mot.charAt(0) >= "a") && (""+mot.charAt(0) <="z"))||((""+mot.charAt(0)>= "A")&&(""+mot.charAt(0)<="Z")))


	// Le 2e caractère est non alphanumérique
	&&(((""+mot.charAt(1)>="!")&&(""+mot.charAt(1)<="/"))||((""+mot.charAt(1)>=":")&& (""+mot.charAt(1)<="@"))
	||((""+mot.charAt(1)>="[")&&(""+mot.charAt(1)<="`"))||((""+mot.charAt(1)>="{")&&(""+mot.charAt(1)<="~")));



//Confirmation du mot de passe et configuration(si le même mot de passe est entré)

if (valide == true) {
    
	 var confirmation = prompt("Confirmez votre mot de passe : ");
	 var identique = (mot === confirmation);
 
 
 	 if (identique == true){
         
    print("Vous avez bien configuré votre mot de passe !");
    }
     
     
     // Si le mot de passe entré est différent du premier, un message d'erreur s'affichera.
      
    else {
    print("Vous n'avez pas réécrit le même mot de passe");
    }
}



// Si le mot de passe n'est pas valide, il ne sera pas confirmé.
     
 if (valide == false){
     
 	print ("Votre mot de passe ne respecte pas les critères de sécurité");
 }


//Fin de l'exécution. 


    