//Ce programme demande à l'usager de rentrer un mot de passe avec quelques conditions.
//Première condition:La longueur est entre 4 et 8 caractères.
//Deuxième condition:Son premier caractère est différent du dernier.
//Troisième condition:Son premier caractère est une lettre
//Quatrième condition:Son deuxième est non alphanumérique.


//Entrez le mot de passe
var mot = prompt("Entrez un mot de passe");
print("mot de passe: "+mot);
var valide=true;

//Vérification de la validité
valide=(
    ( (mot.length>=4 && mot.length<=8)&&(mot.charAt(0)!=mot.charAt(mot.length-1)) ) 
	&& ((mot.charAt(0)>="A"&& mot.charAt(0)<="Z")||
       (mot.charAt(0)>="a"&& mot.charAt(0)<="z"))
    &&(!((mot.charAt(1)>="A" && mot.charAt(1)<="Z"))&&
       (!(mot.charAt(1)>="a" && mot.charAt(1)<="z"))&&(!(mot.charAt(1)>="0" && mot.charAt(1)<="9")))
       );
if(valide){
var confirmation = prompt("Entrez le mot de passe une deuxième fois");
    print("confirmation du mot de passe:"+confirmation);
var identique=(confirmation==mot);

if(identique){
  print("Vous avez bien configuré votre mot de passe");  
}else{
    print("Vous n'avez pas réecrit le même mot de passe");
}
}
if(valide==false){
    print("Votre mot de passe ne respecte pas les critères de sécurité");
}
