/* 01/10/2019 
Nassereddine Bissan 
EXERCICE 02 */

// Le programme suivant permet de générer un mot de passe, si ce dernier remplie les conditions impliquées

var mot = prompt("Mot de passe");  
print("Mot de passe" + mot) ;

// Cette variable vaudra true si le mot de passe est valide, et false sinon 
var valide = (mot.length<=8&&mot.length>=4)&&(mot.charAt(0)!=mot.charAt(mot.length-1))&&
             ((mot.charCodeAt(0)>=65&&mot.charCodeAt(0)<=90)||(mot.charCodeAt(0)>=97&&mot.charCodeAt(0)<=122)) 
             && !((48<=mot.charCodeAt(1) && mot.charCodeAt(1) <=57) || (65<=mot.charCodeAt(1) 
             && mot.charCodeAt(1)<=90) || (97<=mot.charCodeAt(1) && mot.charCodeAt(1)<=122) );

// On entre le mot de passe une deuxième fois, pour s'assurer de sa validité
if (valide) {
    var confirmation = prompt("Veuillez entrer le mot de passe à nouveau"); 
    var identique = mot == confirmation;
    if (identique){
        print ("Vous avez bien configuré le mot de passe!"); } // Ici, on voit que le mot de passe est donc bien configuré... 
        else {
            print("Vous n'avez pas réécrit le même mot de passe"); // ...alors qu'ici non 
        }
    }
        

else {
    print("Votre mot de passe ne respecte pas les critères de sécurité"); // Le premier mot de passe entré n'est pas valide
}