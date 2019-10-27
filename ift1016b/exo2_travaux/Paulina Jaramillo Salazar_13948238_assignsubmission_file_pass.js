//paulina jaramillo 
//01 octobre 2019
//Exercice noté 02
//Vérifier la validité du mot de passe entré par l'utilisateur 

//Obtenir le mot de passe de l'utilisateur 

var mot = prompt("Entrez un mot de passe");

print("Mot de passe:" + mot);

//Valider le mot de passe entré 

var valide =((mot.length>=4 && mot.length<=8)&& // La longeur est entre 4 et 8 caractères
             (mot.charAt(0)!= mot.charAt(mot.length-1))&& //Son 1er caractère est différent de son dernier
             (mot.charAt(0)>="a" && mot.charAt(0)<="z" || //Son 1er caractère est une lettre (soit majuscule ou miniscule)
                mot.charAt(0)>="A" && mot.charAt(0)<="Z")&&
            (!((mot.charAt(1)>="a") && (mot.charAt(1)<="z")||//Son 2e caractère est non alphanumérique
               (mot.charAt(1)>="A") && (mot.charAt(1)<="Z")||
               (mot.charAt(1)>="0") && (mot.charAt(1)<="9"))));

// Si le mot de passe est valide

 if ( valide==true ) {
     
    var confirmation = prompt("Entrez le mot de passe une deuxième fois:");
     
    print ("Mot de passe: " + confirmation);
     
    var identique = (mot===confirmation);
        
     if ( identique==true ) { // Le 1er  mot de passe est pareille au 2e
         
         alert("Vous avez bien configuré votre mot de passe !");
}
  else { // Le 2e  mot de passe n'est pas identique au 1er 
      
         alert("Vous n'avez pas réécrit le même mot de passe");
}
     
 }  
    
else{ //Si le mot de passe n'est pas valide 
    
         alert("Votre mot de passe ne respecte pas les critères de sécurité ");
      
}