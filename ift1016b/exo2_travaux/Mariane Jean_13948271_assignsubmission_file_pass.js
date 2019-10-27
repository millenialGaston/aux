// 1 octobre 2019
// Mariane Jean,  20144893
// Exercice noté 02 : pass.js


// Ce programme demande à l'utilisateur de créer un mot de passe répondant à certains
// critères de sécurité

var mot= prompt("mot de passe:");//mot de passe que l'utilisateur doit entrer

print("mot de passe:"+ mot);


//Conditions du mot de passe

// Mot de passe entre 4 et 8 caractères
var a = (mot.length>=4)&&(mot.length<=8);

//Premier caractère différent du dernier
var b = (mot.charAt(0)!=mot.charAt(7));

//Premier caractère est une lettre majuscule ou minuscule
var c = ((mot.charCodeAt(0)>=65)&&(mot.charCodeAt(0)<=90))|| ((mot.charCodeAt(0)>=97)&&(mot.charCodeAt(0)<=122));

//Deuxième caractère est un symbole
var d = ((mot.charCodeAt(1)>=33)&&(mot.charCodeAt(1)<=47))||((mot.charCodeAt(1)>=58)&&(mot.charCodeAt(1)<=64));


var valide = (a&&b)&&(c&&d);// le mot de passe est valide si l'expression est vrai

//Conditions de validité 
if (valide==true){
    var confirmation =prompt("Confirmation mot de passe");// mot de passe de l'utilisateur
    
    print("confirmation:"+ mot);
    
    var identique= confirmation== mot;// vérification que les 2 mots de passe entrés sont identiques
    
    if (identique== true){        
        print("Vous avez bien configuré votre mot de passe !");
        
    }else if (identique!= true){
        print("Vous n'avez pas réécrit le même mot de passe");
    } 
}else if (valide!= true){
    print("Votre mot de passe ne respecte pas les critères de sécurité");
}


