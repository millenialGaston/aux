/*Labonté-Pelletier, Guillaume, 
24 Septembre 2019, Exercice noté 01 - question 6*/
var
p = 200000,
n = 360,
t = 0.055,
/*Séparation de la formule en étape :
calcul1, calcul2, calcul3 */
calcul1 = t/12*100,
calcul2 = 1+calcul1,
calcul3 = Math.pow(calcul2, n), 
m = p*calcul3*calcul1/(calcul3-1);
print(m);