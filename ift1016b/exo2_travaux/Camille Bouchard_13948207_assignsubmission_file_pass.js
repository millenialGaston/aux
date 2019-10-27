//Bouchard, Camille. 5 octobre 2019. pass
//Ce code permet de configurer un mot de passe ayant des critères précis.

var mot= prompt("Entrez un mot de passe respectant les caractéristiques suivantes: \nLongueur de 4 à 8 caractère\nLe premier et le dernier caractères sont différents\nLe premier caractère est une lettre\nLe deuxième caractère est non alphanumérique.");
print(mot);

var valide= (mot.length>=4 && mot.length<=8 // La longueur du mot est de 4 à 8 caractères
             
             && mot.charAt(0)!=mot.charAt(mot.length-1) //Le premier et le dernier caractères sont différents
             
             && mot.charAt(0).match(/[A-Za-z]/) != null //Le premier caractère est une lettre
             
             && mot.charAt(1).match(/W_/)== null); //Le second caractère n'est ni un caractère alphanumérique, ni un underscore.

if(valide){var confirmation= prompt("Veuillez entrer à nouveau votre mot de passe");
	var identique=(mot==confirmation);
	if(identique){alert("Vous avez bien configuré votre mot de passe!");
                  }
                   else{alert("Vous n'avez pas réécrit le même mot de passe!");
                       }
               }
else{alert("Votre mot de passe ne respecte pas les critères de sécurité");}