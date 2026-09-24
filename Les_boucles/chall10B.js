const prompt = require('prompt-sync')();
const nombre = parseInt(prompt("Donner moi un nombre entier: "))
let somme = 0
let vesomme = []
for (let i= 1; i<= nombre; i++){
    somme += i
    vesomme.push(i)
}
console.log("la somme est : ", vesomme.join(" + ")," = ", somme)