const prompt = require('prompt-sync')();
let nom = prompt("Entrer votre nom: ")
let prenom = prompt("Entrer votre prénom: ")
var age = prompt("Entrer votre age: ")
age = String(age)
while (age <= 0){
 console.log("Invalid age")
 var age = prompt("Enter a valid age: ")
 if (age > 0){
   break
}}
let sexe = prompt("Entrer votre sexe: M/F --> ")
let email = prompt ("Enter your email: ")

console.log(" ")
console.log(`===== Informations Personnelles ====`)
console.log(`Nom: ${nom}`)
console.log(`Prénom: ${prenom}`)
console.log(`Age: ${age}`)
console.log(`sexe: ${sexe}`)
console.log(`adress email: ${email}`)
console.log("=====================================")
