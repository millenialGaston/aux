//Alexy PAUZE et Emmanuelle VIGNERON
//exercice 2
// 1er octobre 2019

//Entrer du mot de passe une première fois.

var mot = 'mot de passe';
mot = prompt('Choisir un mot de passe');
print('Mot de passe: ' + mot);

/*Conditions générales pour mot de passe valide :
Taille du mot de passe compris entre 4 et 8 caractères
Premier caractère différent du dernier
Premier caractère une lettre majuscule ou minuscule
Deuxième caractère ne soit pas une lettre majuscule 
ou minuscule ou un nombre.*/

var m = 'valide';
var d= 'dernier';
d=mot.length-1 ;
m = mot ;
(m=(mot.length >=4 && mot.length <=8)&&
 (mot.charAt(0)!=mot.charAt(d))&& 
 ((mot.charAt(0)>="a"&& mot.charAt(0)<="z")||
(mot.charAt(0) >="A" && mot.charAt(0)<="Z")))&&
(m=!((mot.charAt(1)>="0"&& mot.charAt(1)<="9")||
(mot.charAt(1)>="a")&&(mot.charAt(1)<="z")||
(mot.charAt(1) >="A") &&(mot.charAt(1) <="Z")));
print(m);

//Conditions non respectées.
if (m===false){
	 alert('Votre mot de passe ne respecte pas les critères de sécurité');
}

//Entrer du mot de passe une deuxième fois si premier mot de passe valide.

var c = 'Confirmation';
if (m===true) {
	 c= prompt('Entrer le mot de passe une deuxième fois');
}

//Une fois la deuxième entrée.

var i= 'identique';
i=mot===c;
print(i);

//Deuxième mot de passe entré identique au premier.

if (m===true && i===true){
	 alert('Vous avez bien configuré votre mot de passe !');
}

//Deuxième mot de passe entré différent du premier.

if (m===true && i===false) {
	alert("Vous n'avez pas réécrit le même mot de passe");
}