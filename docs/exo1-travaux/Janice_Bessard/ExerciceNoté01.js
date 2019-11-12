//Question 6, par Janice Bessard et Marie-Hélène St-Jean
var p = 200000;
var n = 360;
var i = 0.055;
var x = i/(12*100);
var y = Math.pow(1+x,n);
var z = y-1;
var m = p*y*x/z;
print(m);