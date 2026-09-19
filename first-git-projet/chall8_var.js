const prompt = require('prompt-sync')();
console.log("vous nous donnez 3 nombres pour vos donons la moyenne géométrique;")
let a = parseFloat(prompt("point1: "))
let b = parseFloat(prompt("point2: "))
let c = parseFloat(prompt("point3: "))
let moyenneGeo  = (a * b * c)^(1/3)
console.log(`La moyenne géométrique: ${moyenneGeo}`)
