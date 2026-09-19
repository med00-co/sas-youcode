const prompt = require('prompt-sync')();
let km = prompt("Entrer la distance en kilomètre: ")
km = Number(km)
let Yards = km * 1093.61
console.log(`la distance en Yards: ${Yards}`)
