const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Temperature en Celisius : ", (C)=>{
    C = Number(C)
    let K = C + 273 
    console.log(`Temperature en Kelvin : ${K}`)
})
