const prompt = require('prompt-sync')();
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


    //   calcul le nombre de votes
let votes = []
for(let i =0 ; i < candidats.length ; i++){
    let vote = candidats[i].electeurs.length
    votes.push(vote)
    candidats[i].nombresVotes = vote
    }
// -------------------------------------------------------------------------------------------------------------------
function supprimerCandidat() {
  for(let o = 1; o<= 1; o++){
    console.log(`
        ==================================================
                   SUPPRIMER DES CANDIDATS
    `)
    console.log(`
     s'il vous plait , il faut d'etre bien concentré dans ce case là;
    `)
    console.log(" ")
    let annule = true
    let supp = false
    let candidatPourSuprimer = prompt("    Entrer CIN du candidat souhaité pour le supprimer : ")
    for (let q = 0; q < candidats.length ; q++ ){
        if (candidatPourSuprimer === candidats[q].cin){
            let verifierDeSupprimer = parseInt(prompt("     étez-vous sùr ?  (1- Oui / 2- Non)  :  "))
            if (verifierDeSupprimer == 1){
                candidats[q] = undefined
                console.log("  Candidat a été supprimé avec succès .")
                supp = true
                annule = false
            }else{
                console.log("  la suppression a été annulé .")
                break;
            }
        }
    }
    if (annule === true){
        break;
    }
    if (supp === false){
        console.log("  Ce Candidat n'existe pas .")
    }
  }
}
supprimerCandidat()
console.log(candidats)