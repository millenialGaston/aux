var t = 5.5/100;
var p = 200000;
var x = t/(12*100);
var n = 360;
var y = 1+x;
var m = (p*Math.pow(y,n)*x)/(Math.pow(y,n)-1) ;
print(m);