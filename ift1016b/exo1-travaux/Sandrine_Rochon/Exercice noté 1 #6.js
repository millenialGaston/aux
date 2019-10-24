//Sandrine Rochon et Sarah Déry
var p = 200000;
var n = 360;
var t = 5.5;
var u = t/(12*100);
var v = (1+u);
var w = Math.pow (v,n);
var m = ((p*w*u)/(w-1));
print(m);
