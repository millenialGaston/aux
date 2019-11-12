//Gabrielle Wester et Alexandre Montreuil
//Exercice noté 2

var mot = prompt("Entrez votre mot de passe");
print ("Mot de passe: " + mot);

//Déclaration des variables

var a = mot.length;//Longueur du mot de passe
var b = mot.charAt(0);//Premier caractère
var c = mot.charAt(mot.length-1);//Dernier caractère
var d = mot.charCodeAt(1);//Deuxième caractère

//Vérification de la validité du mot de passe

var valide = (b>="a"&&b<="z")|| 
    (b>= "A" && b<="Z")&&	//Le premier caractère est une lettre?
    (d<49||d>153||d<192)&&	//Le deuxième caractère est non alphanumérique?
    (b != c)&&				//Le premier caractère est différent du dernier?
    (a>=4&&a<=8);			//Longueur du mot de passe entre 4 et 8 caractères?
if (valide==true) {
    var confirmation = prompt("Veuillez confirmer votre mot de passe");
    var identique = (mot==confirmation);
    if (identique == true){
        alert("Vous avez bien configuré votre mot de passe!");
    }
    else {
        alert("Vous n'avez pas réécrit le même mot de passe");
    }
}
else {
    alert("Votre mot de passe ne respecte pas les criteres de securité");
}


    
