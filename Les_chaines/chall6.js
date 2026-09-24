const prompt= require('prompt-sync')();
let chaine = prompt("Entrer un texte : ")
let caractere = prompt("entrer le caractère cherché: ")
let nombreCar = 0
for (let car of chaine){
    if (car == caractere){
      nombreCar ++
    }
}
console.log(`le nombre de fois ${caractere} est répété est : ${nombreCar} fois`)