let Chilometri = prompt ("Salve viaggiatore, inserisca quanti chilometri percorrerà oggi,grazie");
Chilometri=parseFloat(Chilometri);
let passeggeroEta = prompt ("Qual è l'eta del passeggero?");
passeggeroEta=parseFloat(passeggeroEta);
let prezzofinale

let x = Chilometri;
let y = 0.21;
let z = x * y;

if(passeggeroEta < 18){
let sconto18 = 0.2;
let v = z * sconto18;
prezzofinale = z -v; 
}
else if(passeggeroEta >= 65){
let sconto65 = 0.4;
let v = z * sconto65;
prezzofinale = z - v;
}
else 
{ prezzofinale = z }
let num = prezzofinale;
let n = num.toFixed(2);

document.getElementById("demo").innerHTML = n;