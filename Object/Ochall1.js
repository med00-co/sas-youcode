const prompt = require('prompt-sync')();
const a = require('lodash');
let username = prompt("nom: ").trim()
let prenom = prompt("prénom: ").trim()
let age = parseInt(prompt("age: "))
const myObj = {}
myObj.nom = a.capitalize(username)
myObj.prenom = a.capitalize(prenom)
myObj.age = age
console.log(myObj)