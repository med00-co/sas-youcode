const prompt = require('prompt-sync')(); 
let num = parseInt(prompt("Entrer un nombre: "))
for (let i = 1; i<=10; i++){
    let result = num * i
    console.log(`${num} * ${i} = ${result}`)
}