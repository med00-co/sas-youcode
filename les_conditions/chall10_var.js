const prompt = require('prompt-sync')();
const math = require("mathjs");
console.log("C'est un programe pour calculer le volume de sphère ,\n s'il vous plait entrer son rayon; ")
let x = parseFloat(prompt("Rayon en m: "))
let volume = (4/3)* math.pi * (x**3)
console.log(`Volume : ${volume} m3`)