\\Alexy Pauzé et Emmanuelle Vigneron
\\Calcul du taux d'intérêt


var p = 200000; var n = 360; var i = 5.5; var r= 1/(12*100); var c = Math.pow((1+r),n); var m = (p*c*r)/(c-1);
print (m);
