// Ana Neder

/* Ce programme permet la vérification de la validité d'un mot de passe entré par un l'utilisateur.*/ 

// Enregistrement du mot de passe sous la varible "mot"

var question = prompt("Veillez entre votre mot de passe.");

var mot = question; 

// Affichage du mot de passe, suivit du mot "mot"

print ("mot de passe:" + mot);

//Calcul de la validité du mot de passe, en respectant certaines conditions:

// Première condition: sa longueur est entre 4 et 8 caractères 

{var valide = (mot.length >= 4 && mot.length <= 8)

// Deuxième condition: le premier caractère est différent de son dernier 

&& mot.charAt(mot.length-1)!= mot.charAt(0)

// Troisième condition: son le premier caractère  est une lettre

&& mot.charAt(0) >= "\u0061" && mot.charAt(0) <= "\u007A"
|| mot.charAt(0) >= "\u0041" && mot.charAt(0) <= "\u005A"
 
// Quatrième condition: son deuxième caractère est non alphanumérique 
 
 && mot.charAt(1)< "\u0030"
 || mot.charAt(1)>= "\u003A" && mot.charAt(1)<= "\u0040"
 || mot.charAt(1)>= "\u005B" && mot.charAt(1)<= "\u0060"
 || mot.charAt(1)> "\u007A";}

// Les conditons de validité respectées
if (valide == true){ 
print ("Le mot dep passe que vous venez de saisir est correct.");
var confirmation = prompt (" Entrez le mot de passe une deuxième fois.");
}

// Les conditons de validité ne sont pas respectées
else if (valide == false) {
print ("Vous n'avez pas écrit le bon mot de passe!");
}
        


// Vérification que les deux mots de passe sont identiques

//Les deux mots de passe sont identiques
var identique = ( mot == valide);
if (identique == true) { 
print ("Vous venez bien configurez votre mot de passe!");
}

//Les deux mots de passe ne sont pas identiques
else if (identique == false){
print ("Votre mot de passe ne respecte pas les critères de sécurité");
}
 