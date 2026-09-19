const prompt = require('prompt-sync')();
let vitesseKm = prompt("Entrer la vitesse en Km/h : ")
vitesseKm = Number(vitesseKm)
let vM = vitesseKm *  0.27778
console.log("..")
console.log(`la vitess en m/s est : ${vM} m/s`)