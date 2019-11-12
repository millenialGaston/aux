// Travail effectué par Roua Nour Briedj(20162433)& Nawal Imad(20161236)//

var mot = prompt("Entrez votre mot de passe");

var valide = true;

valide =(((mot.length<=8)&&(mot.length >= 4))
         &&((mot.charAt(0))!=(mot.charAt(mot.length-1))
         &&(((mot.charAt(0) >= "a")
         &&(mot.charAt(0)<= "z"))
         ||((mot.charAt(0) >= "A")
         &&(mot.charAt(0)<= "Z")))
         &&!((((mot.charAt(1) >= "a")
         &&(mot.charAt(1) <= "z")) 
         ||((mot.charAt(1) >= "A")
         &&(mot.charAt(1) <= "Z")))
         ||((mot.charAt(1)>= "0")
         &&(mot.charAt(1)<= "9")))));
var identique = true; 
if(valide){ var confirmation = prompt ("Entrez votre mot de passe une deuxième fois");} 
else { var confirmation = alert ("Votre mot de passe ne respecte pas les critères de sécurité");} 
if (confirmation == mot){identique = true;} else {identique = false;}

if(identique){ var identique = alert ("Vous avez bien configuré votre mot de passe !");} 
else {var identique = alert("Vous n'avez pas réécrit le même mot de passe");}
