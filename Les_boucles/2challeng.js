const prompt = require('prompt-sync')();
let n= parseInt(prompt("Enter a number: "));
let factorielle = 1
for(let i = 1; i<=n ; i++){
    factorielle = factorielle * i
}
console.log(`${n}! = ${factorielle}`)