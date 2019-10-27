//Adrian Minano-Lozano, 1 october 2019, Exercice noté 02
//Première entrée du mot de passe
var mot=prompt("Veuillez entrer votre mot de passe");
//Conditions du mot de passe
//Condition 1: Longueur du mot de passe
var valide=mot.length>=4&&mot.length<=8
//Condition 2: Le premier caractère est différent du dernier 
&&mot.charAt(0)!=mot.charAt(mot.length-1)
//Condition 3:Le premier caractère est une lettre majuscule ou une lettre minuscule
&&(mot.charAt(0)>='A'&&mot.charAt(0)<='Z'||mot.charAt(0)>='a'&&mot.charAt(0)<='z')
//Condition 4: Le deuxième caractère est non-alphanumérique
&&mot.charCodeAt(1)<=0x002F
||mot.charCodeAt(1)>=0x003A&&mot.charCodeAt(1)<=0x0040
||mot.charCodeAt(1)>=0x005B&&mot.charCodeAt(1)<=0x0060
||mot.charCodeAt(1)>=0x007B;
//Confirmation des conditions du  mot de passe
if(valide==true){
var confirmation=prompt("Veuillez rentrer le mot de passe une deuxieme fois"); 
}    
else if(valide==false){
print("Votre mot de passe ne respecte pas les critères de sécurité");   
} 
//Confirmation de la configuration du mot de passe 
var identique=(mot==confirmation);
if(identique==true){
print("Vous avez bien configuré votre mot de passe!");
print("Mot de passe:",mot);
}
else if(identique==false){
alert("Vous n'avez pas réécrit le même mot de passe");
}
   