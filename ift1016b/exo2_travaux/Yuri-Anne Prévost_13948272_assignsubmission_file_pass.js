/*Laura Trubiano (20047116) et Yuri-Anne Prévost (20152749) 2019-09-25
  Exercice noté 2: Validité d'un mot de passe*/

//Entrée du mot de passe
var mot = prompt("Entrez un mot de passe");
print("Mot de passe: " + mot);

//Détermination de la validité
var a = (mot.length)-1;
var valide = 
    //Pour confirmer la validité de sa longueur
    (((4<=mot.length)&&(mot.length<=8)) 
     
    //Pour confirmer que le premier caractère est différent du dernier
    && (mot.charAt(0) != mot.charAt(a)) 
     
    //Pour s'assurer que le premier caractère est une lettre
    && (("a" <= mot.charAt(0) && mot.charAt(0) <= "z") || ("A" <= mot.charAt(0) && mot.charAt(0) <= "Z")) 
    
    //Pour s'assurer que le deuxième caractère soit non alphanumérique           
    && (!(("a" <= mot.charAt(1) && mot.charAt(1) <= "z") || ("A" <= mot.charAt(1) && mot.charAt(1) <= "Z") 
          || ("0" <= mot.charAt(1) && mot.charAt(1) <= "9"))));

//Lorsque l'ensemble des critères sont respectés (true=1), il faut confirmer le mot de passe
if (valide == 1){
    var confirmation = prompt ("Veuillez entrer votre mot de passe de nouveau.");
    var identique = mot === confirmation;
    
    //Lorsque le mot de passe est confirmé
    if (identique == 1){
        alert("Vous avez bien configuré votre mot de passe !");
    
    //Lorsque la confirmation n'est pas identique au mot de passe
    }else if (identique == 0){
        alert("Vous n'avez pas réécrit le même mot de passe.");
    }
//Lorsque le mot de passe n'est pas valide(false=0)
}else if (valide == 0){
    alert("Votre mot de passe ne respecte pas les critères de validité.");
}
