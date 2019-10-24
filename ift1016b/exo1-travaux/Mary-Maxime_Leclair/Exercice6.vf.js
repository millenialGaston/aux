//Exercice 6 - Laurie Charest et Mary-Maxime Leclair

var p=200000;
var n=360;
var t=5.5;

var m=((p*(Math.pow((1+(t/(12*100))),n)))*(t/(12*100)))/((Math.pow(1+(t/(12*100)),n))-1);
print(m);
