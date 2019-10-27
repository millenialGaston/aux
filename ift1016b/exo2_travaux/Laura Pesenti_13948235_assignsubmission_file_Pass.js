// Laura Pesenti 
// Maude-Isabelle Ouellet
// 4 octobre 2019
// Exercice noté 2

var mot = prompt("Entrez un mot de passe");
print("Mot de passe:" + mot);

var last = (mot.length)-1;
var valide = ((mot.length >=4) && (mot.length <=8) && // Sa longueur est entre 4 et 8 caractères
              (mot.charAt(0)!=mot.charAt(last)) && // Son premier caractère est différent de son dernier
              ((mot.charAt(0) >="0X0041")|| (mot.charAt(0)<="0X005A") || // Son premier caractère est une lettre (soit minuscule ou majuscule)
               (mot.charAt(0) >="0X0061") || (mot.charAt(0) <="0X007A")) &&
              ((mot.charAt(1)<"0X0030") &&(mot.charAt(1)>"0X0039") || // Son deuxième caractère est non alphanumérique
               (mot.charAt(1) <"0X0041") && (mot.charAt(1)>"0X005A") ||
               (mot.charAt(1) <"0X0061") && (mot.charAt(1)>"0X007A")));
if (valide==true)
{
    var confirmation = prompt("Entrez votre mot de passe une deuxième fois");
}
else if(valide == false)
{
 

print("Votre mot de passe ne respecte pas les critères de sécurité");
}
var identique =(mot==confirmation);
if(identique == true)
{
    print("Vous avez bien configuré votre mot de passe!");
}
else if(identique == false)
{
    print("Vous n'avez pas réécrit le même mot de passe");
}
              