/*Andréanne Bernatchez et Xavier Michaud
1 octobre 2019
Validité d'un mot de passe entré par un utilisateur*/

//1.Enregistrer dans la variable mot le mot de passe entré

var mot = prompt("Entrez un mot de passe");

//2. Faire afficher ce mot de passe

print("Mot de passe:"+ mot);

//3. Vérifier la validité du mot de passe
// avec les 4 conditions suivantes :

var valide =
    
    // Vérifier que la longueur est entre 4 et 8 caractères
       ((mot.length>=4)&&(mot.length<=8)) &&
    
    // Vérifier que son premier caractère est différent de son dernier
       ( mot.charAt(0)!= mot.charAt(mot.length-1)) &&
    
    // Vérifier que son premier caractère est une lettre majuscule ou minuscule
       (("A"<=mot.charAt(0)&& mot.charAt(0)<="Z")||("a"<=mot.charAt(0)&&mot.charAt(0)<="z"))&&
    
    // Vérifier que son deuxième caractère est non alphanumrique
	   (("A">mot.charAt(1)|| mot.charAt(1)>"Z")&&("a">mot.charAt(1)||mot.charAt(1)>"z")&&("0">mot.charAt(1)||mot.charAt(1)>"9"));

//4. Si le mot de passe est valide,
//nous demandons d'écrire le mot de passe une seconde fois

if(valide == true){
    var confirmation = prompt("Entrez le mot de passe une deuxième fois");
}

//5. Si le mot de passe est invalide,
//nous renvoyons à l'utilisateur que son mot de passe n'est pas conforme et le programme s'arrête

else{
    
	alert("Votre mot de passe ne respecte pas les règles de sécurité");
    
}
//6. Si le premier essai est valide, 
//nous devons vérifier si la seconde entrée l'est aussi

var identique = (confirmation == mot);

if ( identique == true){
                                              
	alert("Vous avez bien configuré votre mot de passe!");
    
}else {
    
	alert("Vous n'avez pas réécrit le même mot de passe");
}