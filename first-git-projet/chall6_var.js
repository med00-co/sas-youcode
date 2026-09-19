const prompt = require('prompt-sync')();
console.log("Entrez deux nombres a & b , pour nous vous donons ses opérations.")
let a = Number(prompt("a = "))
let b = Number(prompt("b= "))
console.log(" ")
console.log(`a + b = ${a + b}`)
console.log(`a - b = ${a - b}`)
console.log(`a * b = ${a * b}`)
console.log(`a / b = ${a / b}`)