const prompt = require('prompt-sync')();
const math = require("mathjs");
console.log("l'équation est : a*x² + b*x + c = 0 ")
let a = parseInt(prompt("Enter a= "))
let b = parseInt(prompt("Enter b= "))
let c = parseInt(prompt("Enter c= "))
console.log(" ")
let delta = b**2 - 4*a*c
if (delta > 0){
    console.log("l'équation admet deux solution x1 et x2 ; ")
    let x1 = (-b - math.sqrt(delta))/2*a
    let x2 = (-b + math.sqrt(delta))/2*a
    console.log(`x1 = ${x1}`)
    console.log(`x2 = ${x2}`)
}else if ( delta = 0){
    console.log("l'équation admet une seule solution ; ")
    let x = -b / 2*a
    console.log(`x = ${x}`)
}else{
    console.log("l'équation n'admet pas de solution")
}