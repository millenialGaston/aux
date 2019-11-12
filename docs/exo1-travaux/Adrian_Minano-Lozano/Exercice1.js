var p=200000;
var t=5.5;
var n=360;
var A=t/(12*100);
var B=1+A;
var C=Math.pow(B,n);
var m=(p*C*A)/(C-1);
print (m);
