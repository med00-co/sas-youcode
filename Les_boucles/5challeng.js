const prompt = require('prompt-sync')();
const Math = require("mathjs");
console.log("C'est un programme qui calcule la puissance d'un base;")
let base = parseInt(prompt("Base: "))
let exposant = parseInt(prompt("Exposant: "))
for(let i = 1; i <= exposant; i++){
    let puissance = Math.pow(base, i);
    console.log(`${base}^${i} = ${puissance}`)
    
}
