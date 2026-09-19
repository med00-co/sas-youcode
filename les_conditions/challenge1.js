const prompt= require('prompt-sync')();
let num = parseFloat(prompt("Entrer un nombre: "))
if (num % 2 === 0 ){
    console.log("ce nombre est pair")
}else{
    console.log("ce nombre est impair")
}