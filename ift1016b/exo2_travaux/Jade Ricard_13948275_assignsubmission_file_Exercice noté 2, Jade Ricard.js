//Fichier: Pass.js, Jade Ricard, 1 octobre 2019
// Ce fichier vérifie la validité d'un mot de passe entré par un usager. 
var mot=prompt("Entrez un mot de passe");
print ("Mot de passe \u003A"+(mot)); 

// Confirmer la validité du mot de passe
var valide =((mot.length >= 4) && (mot.length <= 8) && (mot.charAt(0)!= mot.charAt(mot.length-1))&& ((mot.charAt(0)>="A") && (mot.charAt(0)<="Z")||((mot.charAt(0)>="a") && (mot.charAt(0)<="z"))&&(mot.charAt(1)<"A") || (mot.charAt(1)>"Z")&& ((mot.charAt(1)<"a") || (mot.charAt(1)>"z")) && ((mot.charAt(1)<0) || (mot.charAt(1)>9)))); 
             
// Indiquer à l'utilisateur si son mot de passe est invalide
if (valide == false)
	{
     alert("Votre mot de passe ne respecte pas les critères de sécurité");
    } 
else 
	{
     var confirmation = prompt("Confirmez le mot de passe");
    }

//Vérifier si les deux mots de passe rentres sont les mêmes
var identique =  mot === confirmation;

//Indiquer a l'utilisateur si il a réécrit le même mot de passe 
if (identique == true) 
	{
     alert("Vous avez bien configuré votre mot de passe !");
    }
else 
	{
     alert("Vous n'avez pas réécrit le même mot de passe");
    }