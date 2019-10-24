var p = 200000;
var n = 360;
var t = 5.5; 
var a = t/(12*100);
var b = Math. pow (1+a,n);
var m = (p*b)*a/(b-1);
print (m);