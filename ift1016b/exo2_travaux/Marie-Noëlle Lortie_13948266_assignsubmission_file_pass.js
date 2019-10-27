//Marie-Noëlle Lortie 1 octobre Exercice noté 02

/*Entrer le mot de passe*/
var mot = prompt("Entrez un mot de passe");
print("Mot de passe: "+ mot);

/*Contraintes à respecter: */
var longueur = mot.length > 3 && mot.length < 9;
var debutFin = mot.charAt(0) != (mot.charAt(mot.length-1));
var premierAlpha = mot.charAt(0)>="A" && mot.charAt(0)<="Z" || mot.charAt(0)>="a" && mot.charAt(0)<="z";
var nonAlphaNum = mot.charCodeAt(1)>=32 && mot.charCodeAt(1)<=47||
               (mot.charCodeAt(1)>=58 && mot.charCodeAt(1)<=96)||
               (mot.charCodeAt(1)>=123 && mot.charCodeAt(1)<=126);

/*Valider le code*/
var valide = longueur && debutFin && premierAlpha && nonAlphaNum;
if (valide){
    /*Confirmer le mot de passe*/
    var confirmation  = prompt("Entrez votre mot de passe à nouveau");
    
    /*Vérification du deuxième mot de passe entré*/
    if( mot == confirmation){
        print("Vous avez bien configuré votre mot de passe !");
    }else {
        print("Vous n'avez pas réécrit le même mot de passe");
    }
}else {
    print("Votre  mot  de passe  ne  respecte  pas  les  critères  de sécurité");
}
    

