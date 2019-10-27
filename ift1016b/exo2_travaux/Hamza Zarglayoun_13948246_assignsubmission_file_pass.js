// Hamza Zarglayoun et Sylvie Tran     01/10/2019
// Exercice noté 02

// Création du mot de passe  

var mot = prompt ("Veuillez entrer votre nouveau mot de passe."); 

print("Mot de passe: "+mot); 

// Conditions de validité du mot de passe et stockage du résultat

 var valide = 
    (mot.length >= 4 && mot.length <= 8) 
 
	&& (mot.charAt(0) != mot.charAt(mot.length-1)) 

 	&& ((mot.charAt(0) >= "A" && mot.charAt(0) <= "Z") 
	|| (mot.charAt(0) >= "a" && mot.charAt(0) <= "z"))
 
	&& (mot.charAt(1) < "0" || mot.charAt(1) > "9") 
    && (mot.charAt(1) < "A" || mot.charAt(1) > "Z") 
    && (mot.charAt(1) < "a" || mot.charAt(1) > "z"); 

// Confirmation du mot de passe valide

if (valide == false){
    //Mot de passe invalide
    alert("Votre mot de passe ne respecte pas les critères de sécurité.");
    
} else if (valide == true){
    //Mot de passe valide
    var confirmation = prompt("Veuillez entrer votre mot de passe une deuxième fois.");

// Comparaison du premier mot de passe et du deuxième

var identique = (mot == confirmation);

if (identique == true){
    // Mots de passe identiques
    alert("Vous avez bien configuré votre mot de passe!");  
    
} else if (identique == false)
    // Mots de passe différents
    alert("Vous n'avez pas réécrit le même mot de passe.");
}