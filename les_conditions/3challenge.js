const prompt = require('prompt-sync')();
let a = parseInt(prompt("Enter the 1st number: "))
let b = parseInt(prompt("Enter the 2nd number: "))
console.log(" ")
if (a === b){
    console.log(`le triple du somme: ${(a+b)*3}`)
}else{
    console.log(`la somme: ${a+b}`)
}