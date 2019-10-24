var p = 200000;
var n = 360;
var t = 0.055,c = t/(12*100),k = (1+c);
var m =( p*(Math.pow(k,n))*c)/((Math.pow(k,n))-1);
print(m)
