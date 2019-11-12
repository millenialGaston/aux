//Kim Goyette, exercices noté #2,3 octobre.


var mot= prompt("Quel est le mot de passe?");
print("mot de passe:"+mot);//imprimer le mot de passe


var longueur = ((mot.length>=4)&&(mot.length<=8)); //longueur du mot de passe, entre 4 et 8 caractères

var caractère=(mot.charAt(0)!=mot.charAt(mot.length-1)); //le premier caractère est différent du dernier

var lettre = (mot.charAt(0) >="a" && mot.charAt(0)<= "z")||(mot.charAt(0)>="A"  || mot.charAt(0)<= "Z"); 
//le premier caractère est soit une lettre minuscule inclue entre a ET z, OU une lettre majuscule inclue entre A ET Z

var nonalpha=(mot.charAt(1)!=(((mot.charAt(1)>= "a"&& mot.charAt(1)<= "z"))||((mot.charAt(1)>= "A" && mot.charAt(1)<= "Z")) || ((mot.charAt(1) >= 0 && mot.charAt(1) <= 9)))); 
//le deuxieme caractere n'est pas un alpha num donc, il n'est pas une lettre minuscule, lettre majuscule ou un nombre

var valide = longueur && caractère && lettre && nonalpha;
//valide évalue si les 4 conditions sont respectées


if (valide == true){
    var confirmation = prompt("Veuillez écrire le mot de passe à nouveau");
    if (mot == confirmation){
      var identique = print("Vous avez bien configurer votre mot de passe!");
    }
    else {
        print("Vous n'avez pas réécrit le même mot de passe.");
    }
}
else {
    print("Votre mot de passe ne respecte pas les critères de sécurité.");
}