//Labonté-Pelletier, Guillaume , 1er Octobre, exercice noté 02

var mot = prompt("Entrez un mot de passe");

//conditions de validité (4)
var valide = (mot.length >= 4 && mot.length <= 8) //longueur mot entre 4 et 8 caractères

	&& (mot.charAt(0) != mot.charAt(mot.length-1)) //premier caractères n'est pas même que dernier

    && ((mot.charCodeAt(0) >= 65 && mot.charCodeAt(0) <= 90) //premier caractères est une lettre (min ou maj)
	||(mot.charCodeAt(0) >= 97 && mot.charCodeAt(0) <= 122))
  
    && ((mot.charCodeAt(1) <= 47) //deuxième caractère est non alphanumérique
    || (mot.charCodeAt(1) >= 58  &&  mot.charCodeAt(1) <= 64) 
    || (mot.charCodeAt(1) >= 91 && mot.charCodeAt(1) <= 96) 
	|| (mot.charCodeAt(1) >= 123));


if (valide) //Vérification des quatres conditions 
{
	var confirmation = prompt("Confirmez votre mot de passe"); //Vérification réussi
	var identique = mot == confirmation;


	if (identique) //Retaper le mot de passe pour le confirmer
	{ 
		print("Vous avez bien configurez votre mot de passe"); 
    	print("Mot de passe : " + mot); 
	}
	else 
	{
		print("Vous n'avez pas réécrit le même mot de passe"); 
	}  
 
      
}
else 
{
	print("Votre  mot  de passe  ne  respecte  pas  les  critères  de sécurité"); //vérification échoué
}