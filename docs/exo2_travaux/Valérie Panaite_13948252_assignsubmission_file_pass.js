//Valérie, Panaite, Exercice noté 2
//5 octobre 2019

//Ce programme demande à l'usager de rentrer un mot de passe
//et détermine si celui-ci est valide d'après une série de critères.


var mot = prompt("Veuillez entrer votre mot de passe.");

print("Mot de passe: "+mot);

var valide = false;

 //	Est-ce que le mot de passe respecte les critères de sécurité?

if ((mot.match(/(\w[^A-Za-z0-9].*)/) && (mot.length >= 4 && mot.length <= 8) && (mot.charAt(0) !== mot.charAt(mot.length-1))))
	{
    	valide = true;
	}
else
	{
   	 	print("Votre mot de passe ne respecte pas les critères de sécurité.");
	}

 //Une fois que le mot de passe est valide, on demande de le rentrer une seconde fois.

	if (valide)
		{
    		var confirmation = prompt("Veuillez confirmer le mot de passe.");
        
   		 if (confirmation !== mot)//Si le mot de passe n'est pas le même
    		{
        		print("Vous n'avez pas réécrit le même mot de passe.");
 			}
  		else//Si le mot de passe est le même
  			{
   		 		print("Vous avez bien configuré votre mot de passe !");
  			}
		}
