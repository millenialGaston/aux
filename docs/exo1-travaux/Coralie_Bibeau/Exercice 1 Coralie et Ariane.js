//Coralie Bibeau et Ariane Garneau-Desroches
var p = 200000;
var n = 360;
var i = 0.055;
var m = 0;
m = (p*Math.pow((1+(i/(12*100))),n)*(i/(12*100)))/((Math.pow((1+(i/(12*100))),n)-1));
print(m);
