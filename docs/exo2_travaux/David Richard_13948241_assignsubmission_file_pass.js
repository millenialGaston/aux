/* Jonathan Dion (20157667)et David Richard (20158152)
Travail pratique évalué no.2*/

//Fonction pour choisir son mot de passe
var mot = prompt ("Entrer mot de passe");

(print("Mot de passe: " + mot)); 

//Vérification de la longueur du mot de passe
var valide = ((mot.length >= 4) && (mot.length <= 8)) 

//Vérification de la différence entre le premier et le dernier caractère
&& ((mot.charAt(0))!=(mot.charAt(mot.length-1)))

//Vérification que le premier caractère soit une lettre
&& ((((mot.charAt(0)) >= "\u0041") && ((mot.charAt(0)) <= "\u005A")) ||
    (((mot.charAt(0)) >= "\u0061") && ((mot.charAt(0)) <= "\u007A")))

//Vérification que le deuxième caractère ne soit pas alphanumérique
&& (((mot.charAt(1)) < "\u0031") ||
    (((mot.charAt(1)) > "\u003A") && ((mot.charAt(1)) < "\u0041")) ||
    (((mot.charAt(1)) > "\u005A") && ((mot.charAt(1)) < "\u0061")) ||
    ((mot.charAt(1)) > "\u007A"));

//Fonction si le mot de passe est incorrect
if (valide == false) {    
    alert ("Votre mot de passe ne respect pas les critères de sécurité");
    
//Fonction si le mot de passe est valide    
}else if (valide == true) {
    
    var confirmation = prompt ("Entrer votre mot de passe une deuxième fois");
    
//Vérification que les deux mots de passe correspondent    
    var identique = (mot == confirmation);
    
//Fonctions si les deux mots de passe sont identiques    
    if (identique = true) {
        alert ("Vous avez bien configuré votre mot de passe !");
        
//Fonctions si les deux mots de passe sont différents       
    }else if (identique = false) {
        alert ("Vous n'avez pas réécrit le même mot de passe");
    }
}