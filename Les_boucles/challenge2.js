const prompt = require('prompt-sync')();
let caractere = prompt("Entrer un caractére: ").toLowerCase();
switch (caractere){
    case "a":
    case "e":
    case "u":
    case "i":
    case "y":
    case "o":
         console.log(`${caractere} est une voyelle!`)
         break
    default:
         console.log(`${caractere} n'est pas une voyelle!`)
} 