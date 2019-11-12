//Sarah Déry,1 octobre 2019, exercice noté 2
//Description: programme de configuration d'un mot de passe
//Version 1.0

var mot = prompt("Entrez un mot de passe"); //Saisie du mot de passe

print("Mot de passe: "+mot); //Impression du mot de passe

var valide = ((mot.length >= 4)&&(mot.length <= 8))&&               //Validation de la longueur du mot de passe
             ((mot.charAt(0))!=(mot.charAt(mot.length-1)))&&                     //Validation de la différence entre le premier et dernier caractère
             ((mot.charAt(0)>="A")&&(mot.charAt(0)<="Z")||(mot.charAt(0)>="a")&&(mot.charAt(0)<="z"))&&                           //Validation du premier caractère comme étant une lettre majuscule ou minuscule
             (((mot.charAt(1)<"A")||(mot.charAt(1)>"Z"))&&((mot.charAt(1)<"a")||(mot.charAt(1)>"z"))&&((mot.charAt(1)<"0")||(mot.charAt(1)>"9")));       //Validation du deuxième caractère comme un caractère non-alphanumérique 

if (valide == true)                                          //Vérification du respect des conditions
   {var confirmation = prompt("Entrez pour une deuxième fois votre mot de passe");
    
   if (confirmation == mot)
      {var identique = print("Vous avez bien configuré votre mot de passe !");
      }
   else
      {print("Vous n'avez pas réécrit le même mot de passe");
      }
   }
else
   {print("Votre mot de passe ne respecte pas les critères de sécurité");
   }