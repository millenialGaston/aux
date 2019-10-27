//Marguerite Nolin et Sophie DeTroio  30 septembre 2019  Exercice noté # 2

var valide;    
var identique; 
var confirmation;
var mot = prompt("Entrez un mot de passe");
var condition = (((mot.charAt(1)>= ("a") && (mot.charAt(1)<= ("z")) || ((mot.charAt(1)>= ("A")) && (mot.charAt(1)<= ("Z")) || 
(mot.charAt(1) >= 0 && mot.charAt(1)<= 9)))));    
print("Mot de passe : " + mot);  
   
//condition 1 (le mot de passe à entre 4 et 8 caractères)

	if ((mot.length >= 4 && mot.length <= 8) &&        
  
//condition 2 (le premier et le dernier caractère ne sont pas les mêmes)

	(mot.charAt((+mot.length)-(+1))!= mot.charAt(0)) &&    
     
//conditon 3 (le premier caractère est une lettre majuscule ou minuscule)

	(mot.charAt(0)>= ("a") && mot.charAt(0)<= ("z")) || (mot.charAt(0)>= ("A") && mot.charAt(0)<= ("Z")) &&

//condition 4 (deuxième caractère n'est pas un nombre alphanumérique

(mot.charAt(1)== !("condition")) ){ 
   

valide=(true);    
       
	} else {       

 valide =(false);    

}   
	if (valide==true){    

confirmation = prompt("Entrez le mot de passe une deuxième fois");  
  
	}else{

print("Votre mot de passe ne respecte pas les critères de sécurité");

} 

	if(mot==confirmation){ 

identique = (true); 

}else{ 

identique = (false); 


}

 
	if(identique==true){

print("Vous avez bien configuré votre mot de passe!");

}else{

print("Votre n'avez pas réécrit le même mot de passe");


}


if(identique==false){

print("Votre mot de passe ne respecte pas les critères de sécurité");


}


