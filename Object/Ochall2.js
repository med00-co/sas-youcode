const prompt = require('prompt-sync')();
const a = require('lodash');
const info = {}
const note = []
let nom = prompt("Nom: ").trim()
let prenom = prompt("Prenom: ").trim()


let note1 = parseInt(prompt("note1: "))
let note2 = parseInt(prompt("note2: "))
let note3 = parseInt(prompt("note3: "))

note[0]= note1
note[1]= note2
note[2]= note3
let somme = 0

for(let no of note){
    somme += no
}
let moyene = somme / note.length

info.nom = a.capitalize(nom)
info.prenom = a.capitalize(prenom)
info.notes = note
info.moyenne = moyene


console.log(" ")
console.log("Les informations de l'étudiente: ")
for(let key in info){
    console.log(key, " : ", info[key])
    
}
