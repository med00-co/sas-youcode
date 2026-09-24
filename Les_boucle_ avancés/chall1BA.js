const prompt = require('prompt-sync')();
const nombre = parseInt(prompt("Un nombre: "))
const multiples = []
for(let i = 1 ; i <= 10 ; i++){
    let mult = `${nombre} * ${i} = ${nombre * i }`
    multiples.push(mult)
}
console.log(multiples.join(" "))