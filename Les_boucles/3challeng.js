const prompt = require('prompt-sync')();
let n = parseInt(prompt("Entrer un nombre entier: "))
let somme = 0
for(let i=1; i<= n ;i++){
  somme += i
}
console.log(`la somme : ${somme}`)