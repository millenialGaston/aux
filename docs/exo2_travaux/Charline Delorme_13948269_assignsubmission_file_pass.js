// Arielle Desnoyers et Charline Delorme 
// Exercice noté 2
// 1 octobre 2019.

var mot=prompt("Indiquez votre mot de passe");

print("Mot de passe: " + mot);

//Critères de validité du mot de passe

var valide=mot.length <9 && mot.length>3 
&& (mot.charAt(0) != mot.charAt(mot.length-1)) 
&& (((mot.charAt(0)>="A") && (mot.charAt(0)<="Z")) || ((mot.charAt(0)>="a") && (mot.charAt(0)<="z"))) 
&& (((mot.charAt(1)<"A") || (mot.charAt(1)>"Z")) && ((mot.charAt(1)<"a") || (mot.charAt(1)>"z")) && ((mot.charAt(1)<"0") || (mot.charAt(1)>"9")));

//Si mot de passe est invalide

if (valide==false) {
    alert("Votre mot de passe ne respecte pas les critères de sécurité");
}
else{
    /*Redemander le mot de passe*/

var confirmation=prompt("Entrez une deuxième fois votre mot de passe");

var identique=(confirmation==mot);
    
    print(identique);

if (identique==true) {alert("Vous avez bien configuré votre mot de passe!");}
if (identique==false) {alert("Vous n'avez pas réécrit le même mot de passe");}
}