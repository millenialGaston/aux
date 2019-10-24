\\Travail effectué par Marie-Jeanne Blouin et Cléo St-Martin;
var p = 200000;
var n = 360;
var i = 0.055;
var a = i/(12*100);
var b = Math.pow((1+a),n);
var m = p*b*a/(b-1);
print (m); 


