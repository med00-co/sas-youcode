const prompt = require('prompt-sync')();
let km =parseFloat( prompt("Entrer la distance en kilomètre: "));

let Yards = km * 1093.61
console.log(`la distance en Yards: ${Yards}`)
