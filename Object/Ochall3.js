const prompt = require("prompt-sync")();
const rectangle = {
    longeur: undefined,
    largeur: undefined
}
rectangle.longeur = parseInt(prompt("Longeur: "))
rectangle.largeur = parseInt(prompt("Largeur: "))

function air(a,b){
    return a * b;
}
let aire = air(rectangle.longeur , rectangle.largeur)
rectangle.aire = aire
console.log(rectangle)