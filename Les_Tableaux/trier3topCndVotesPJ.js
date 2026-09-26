const prompt = require("prompt-sync")()

const candidats = [
    {
        cin : "AB123456", 
        nom : "Boushaba", 
        prenom : "Soufiane", 
        partiPolitique : "Independant", 
        age: 40, 
        electeurs: ["DG455687"] 
    },
    {
        cin : "HH45478", 
        nom : "Amsa", 
        prenom : "Jaouad", 
        partiPolitique : "Independant", 
        age: 34, 
        electeurs: []         
    },
    {
        cin : "JC87653", 
        nom : "Taoussi", 
        prenom : "Ebdellah", 
        partiPolitique : "Independant", 
        age: 26, 
        electeurs: ["CH15652", "RC746486", "WQ877663", "ED349364"] 
    },
    {
        cin : "JC38954", 
        nom : "Wahna", 
        prenom : "Mohamed", 
        partiPolitique : "Independant", 
        age: 21, 
        electeurs: ["JM37567", "KM198384", "AM773300"]         
    },
    {
        cin : "UI629754", 
        nom : "Oujbou", 
        prenom : "Youssef", 
        partiPolitique : "Independant", 
        age: 25, 
        electeurs: ["WZ532973", "FT973289", "EJ465734", "NC846543", "DC538674", "XY746735", "SD635366"] 
    },
    {
        cin : "FH498394", 
        nom : "Outdnass", 
        prenom : "Mohamed", 
        partiPolitique : "Independant", 
        age: 34, 
        electeurs: ["JC754544", "JM456546"] 
    },
]
// -------------------------------------------------------------------------------------
for(let cana of candidats){
    cana.nombresVotes = cana.electeurs.length
    } 
// -------------------------------------------------------------------------------------


let firstTop = candidats[0].nombresVotes
let firstTopCANDIDAT 

let secondTop = candidats[0].nombresVotes
let secondTopCANDIDAT

let thirdTop = candidats[0].nombresVotes
let thirdTopCANDIDAT
for (let cndt of candidats){
    if (firstTop < cndt.nombresVotes){
        thirdTop = secondTop
        thirdTopCANDIDAT = secondTopCANDIDAT

        secondTop = firstTop
        secondTopCANDIDAT = firstTopCANDIDAT 

        firstTop = cndt.nombresVotes
        firstTopCANDIDAT = cndt.cin +" ; "  +cndt.nom + " "+ cndt.prenom
    }
}
for(let i = 0; i< candidats.length ; i++){
    if (firstTop !== candidats[i].nombresVotes && secondTop !== candidats[i].nombresVotes && thirdTop < candidats[i].nombresVotes){
       thirdTop = candidats[i].nombresVotes
       thirdTopCANDIDAT = candidats[i].cin +" ; "  +candidats[i].nom + " "+ candidats[i].prenom
    }
}
console.log("1 - ",firstTop , " ", firstTopCANDIDAT)
console.log("2- ",secondTop, " ", secondTopCANDIDAT)
console.log("3- ", thirdTop, " ", thirdTopCANDIDAT)    