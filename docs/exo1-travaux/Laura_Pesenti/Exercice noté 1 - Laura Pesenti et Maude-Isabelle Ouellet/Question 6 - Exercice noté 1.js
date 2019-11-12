var p=200000;
var n=360;
var t=0.055;
var y=((t/12*100));
var z=Math.pow(1+y,n);
var m=(p*z*y)/(z-1);
print(m)


