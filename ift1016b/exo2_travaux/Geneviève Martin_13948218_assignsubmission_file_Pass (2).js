// Exercice noté 2 par  Léa Blouin Gagnon et Geneviève Martin, 1er octobre 2019

var mot = prompt("Choisissez un mot de passe:");
var type0 = (mot.charCodeAt(0));// Afin d'alléger la longue ligne de conditions de validité
var type1 = (mot.charCodeAt(1));
var n = (mot.length); // On souhaitait avoir le nombre de caractères pour pouvoir trouver la position du dernier caractère

print( "Mot de passe: " + mot);

var valide = ((mot.length>=4) // Vérification du nombre de caractères  
              && (mot.length<=8)  
              && (( type0 >=65)&&( type0 <=90))||(( type0 >=97)&&( type0 <=122))) // Vérification que le premier caractère est une lettre 
			  && (mot.charAt(0)!=mot.charAt( n - 1 )) // Vérification que le premier caractère est différent du dernier
			  && ((( type1 <48) || (( type1 >57)&& ( type1 <65)) || (( type1 >90) && ( type1 <97)) || ( type1 >122))); // Vérification que le deuxième caractère n'est pas alphanumérique

if (valide === true ) { 
    var confirmation = prompt("Veuillez confirmer votre mot de passe");// Confirmation du mot de passe s'il est valide
    var identique = ( confirmation === mot );// Vérifier si la confirmation du mot de passe est identique au mot de passe d'origine
    
} else {
    print("Votre mot de passe de respecte pas les critères de sécurité");// Informer l'usager que son mot de passe n'est pas valide
}

if (( valide === true ) && ( identique === true )) {
    print("Vous avez bien configuré votre mot de passe!");// Informer l'usager que son mot de passe est bien configuré
 
} else if ((valide === true ) && (identique === false )) {
           print("Vous n'avez pas réécrit le même mot de passe");// Informer l'usager que son mot de passe était valide, mais qu'il n'a pas réécrit le même
} else { 
    ;
}
           
           
    


    
     
        




