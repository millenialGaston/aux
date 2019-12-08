// [[file:~/aux/ift1016b/exo2.org::*solutionnaire][solutionnaire:1]]
let hasGoodLength = mot.length > 3 && mot.length < 9;
let isDipole = mot.charAt(0) != mot.charAt(mot.length-1);
let firstCharAlpha = mot.charAt(0)>="A" && mot.charAt(0)<="Z" || mot.charAt(0)>="a" && mot.charAt(0)<="z";
let secondCharNotAlphaNum =
    mot.charCodeAt(1)>=32  && mot.charCodeAt(1)<=47  ||
    mot.charCodeAt(1)>=58  && mot.charCodeAt(1)<=96  ||
    mot.charCodeAt(1)>=123 && mot.charCodeAt(1)<=126;
let valid = hasGoodLength && isDipole && firstCharAlpha && secondCharNotAlphaNum;

if (valid){
    let secondInput  = prompt("Entrez votre mot de passe à nouveau");
    if(mot == secondInput){
        print("Vous avez bien configuré votre mot de passe !");
    }
    else {
        print("Vous n'avez pas réécrit le même mot de passe");
    }
}
else {
    print("Mot de passe invalide");
}
// solutionnaire:1 ends here
