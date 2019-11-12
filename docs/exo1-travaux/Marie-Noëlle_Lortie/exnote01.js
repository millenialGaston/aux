var p=200000;
var n=360;
var t=5.5;
var z=t/(12*100);
var y=1+z;
var x=Math.pow(y,n);
var w=x-1;
var m=(p*x*z)/w;
print(m);