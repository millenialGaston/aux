var p = 200000;
var n = 360;
var t = 5.5/100;
var x = t/(12*100);
var y = Math.pow((1+x),n);
var m = (p*y*x)/(y-1);
print(m);