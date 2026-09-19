const prompt = require('prompt-sync')();
const math = require("mathjs");
console.log("Entrer les coordonnés de ces deux point 1 et 2")
let x1 = parseFloat(prompt("x du point 1 : "))
let y1 = parseFloat(prompt("y du point 1 : "))
let z1 = parseFloat(prompt("z du point 1 : "))
console.log("maintenant du point 2")
let x2 = parseFloat(prompt("x du point 2 : "))
let y2 = parseFloat(prompt("y du point 2 : "))
let z2 = parseFloat(prompt("z du point 2 : "))
let distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2)
console.log(" ")
console.log(`Distance : ${distance} m`)