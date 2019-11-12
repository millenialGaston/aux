//1er Octobre 2019
//Nom de l'étudiant: Julie Guertin (20120742)
//Exercice noté 2: Vérifier un mot de passe. 
//Écrire un programme javascript qui va vérifier la validité d'un mot de passe entré par l'utilisateur.

//Déclaration des variables
var mot = "";
var valide = "";
var identique = "";
var confirmation = "";

//Obtenir le mot de passe de l'utilisateur
var mot = prompt("Quel est votre mot de passe?");  

print("Mot de passe: " + mot);

//Valider le mot de passe entré.

var valide = ((mot.length >=4)&&(mot.length<=8)&&               //La longueur est entre 4 et 8 caractères
              ((mot.charAt(0) != mot.charAt(mot.length-1)))&&   //Le 1er caractère  est différent du dernier
             ((mot.charAt(0)>="A")&&(mot.charAt(0))<="Z")||
              (mot.charAt(0)>="a")&&(mot.charAt(0)<="z"))&&     //Le 1er caractère est une  majuscule ou minuscule
             (!((mot.charAt(1)>="A")&&(mot.charAt(1)<="Z")||
              (mot.charAt(1)>="a")&&(mot.charAt(1)<="z")||
              (mot.charAt(1)>="0")&&(mot.charAt(1)<="9")));     //Le 2e caractère est non alphanumérique 

if (valide==true) // si le mot de passe respecte les critères de validité
{ 
    //Obtenir le mot de passe à nouveau.
	var confirmation = prompt("Entrez votre mot de passe à nouveau?");
    
    print("Mot de passe: " + confirmation);
    
    var identique = (mot==confirmation);
    
    if (identique==true) // Le 1er mot de passe est identique au 2e mot de passe entré.
    {
        alert("Vous avez bien configuré votre mot de passe !");
    } 
    else // Le 1er mot de passe est différent du 2e mot de passe entré.
    {
        alert("Vous n'avez pas réécrit le même mot de passe");
    } 
}

else  //si le mot de passe ne respecte pas les critères de validité
{
    alert("Votre mot de passe ne respecte pas les critères de sécurité");    
}
