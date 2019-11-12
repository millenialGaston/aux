//Elodie Petit et Neve Tourigny 
//1er octobre 2019
//Exercice noté 2

//Configuration du mot de passe.
var mot= prompt("Entrez le mot de passe");
print("Mot de passe: " + mot);
Mot de passe: P_etit

//Conditions à respecter pour le mot de passe.
//Longueur entre 4 et 8 caractères
(4<=mot.length)&&(mot.length<=8);
true

//Premier caractère différent du dernier
mot.charAt(0)!= mot.charAt(mot.length-1);
true

//Premier caractère est une lettre (majuscule ou minuscule)
("a"<=mot.charAt(0))&&(mot.charAt(0)<= "z")||("A"<=mot.charAt(0))&&(mot.charAt(0)<= "Z");
true

//Deuxième caractère est non alphanumérique
(mot.charAt(1)<"\u0030")||("\u0039"<mot.charAt(1))&&
    (mot.charAt(1)<"\u0041")||("\u005A"<mot.charAt(1))&&(mot.charAt(1)<"\u0061")||("\u007A"<mot.charAt(1));
true

//Les conditions en une expression
var valide= 
    (4<=mot.length)&&(mot.length<=8)
	&&(mot.charAt(0)!= mot.charAt(5))
	&&("a"<=mot.charAt(0))&&(mot.charAt(0)<= "z")||("A"<=mot.charAt(0))&&(mot.charAt(0)<= "Z")
	&&(mot.charAt(1)<"\u0030")||("\u0039"<mot.charAt(1))&&(mot.charAt(1)<"\u0041")||("\u005A"<mot.charAt(1))&&
    (mot.charAt(1)<"\u0061")||("\u007A"<mot.charAt(1));

print(valide);
true

//Confirmation du mot de passe. 
if (valide == true){
    var confirmation=prompt("Entrez de nouveau le mot de passe");
}

else {
    
     alert("Votre mot de passe ne respect pas les critères de securité");    
}
    
//Vérifier que les deux mots de passe sont identiques
var identique = confirmation == mot;
print(identique);
true

//Diffusion des messages selon bon ou mauvais mot de passe.
if (identique == true){

    alert("Vous avez bien configuré votre mot de passe!");

}else {
    alert("Vous n'avez pas réécrit le même mot de passe");
}




