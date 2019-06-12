var mot = prompt("Ecrire un mot");
document.getElementById("gras").innerHTML = mot;
document.getElementById("min").innerHTML = mot;
document.getElementById("maj").innerHTML = mot;

var consonnes = ["z","r","t","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
var voyelles = ["a","e","i","o","u","y"];
var nombrevoyelles = 0;
var nombreconsonnes= 0;

for(i=0; i < mot.length; i++){
    //on part de 0, jusqu'à la longueur du mot, et on avance à chaque fois
    if(voyelles.indexOf(mot[i].toLowerCase())!=-1){
        // si des voyelles font partie du mot[0,1,2,etc] en minuscule, et si ça fait partie du tableau,
        nombrevoyelles++;
        //on ajoute +1 au nombre de voyelles

    }else{
        //sinon on ajoute +1 aux consonnes
        nombreconsonnes++;
    }
}
document.getElementById("nombre").innerHTML = "Ce mot contient " + nombrevoyelles + " voyelle(s) et "+ nombreconsonnes + " consonne(s).";

document.getElementById("retourné").innerHTML = mot.split("").reverse().join("");
var tom = mot.split("").reverse().join("");

    if(mot===tom){
        document.getElementById("motinversé").innerHTML = "Ce mot est un palindrome !";
     }else{
        document.getElementById("motinversé").innerHTML = "Ce mot n'est pas un palindrome !";
     }