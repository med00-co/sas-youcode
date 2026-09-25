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

// Ajoute Function
function ajouteCandidat(){
    console.log(" ")
    console.log("       Merci d'entrer les informations de candidat demandés ;")
    console.log(" ")
    let candidatPourAjouté = {}

    for(let i =1 ; i<= 1 ; i++){
        let countCandidatDéjaTrouvé = 0
        let cinNewCandidat = prompt("   CIN: ")
        //  vérifier est ce que le Candidat est Déja Trouvé
         for(let cnd of candidats){
             if (cnd.cin === cinNewCandidat) {
                countCandidatDéjaTrouvé ++
             }
         }
         if (countCandidatDéjaTrouvé >= 1){
            console.log("     Ce candidat est déja trouvé .")
            break;
         }  
        //  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

         candidatPourAjouté.cin = cinNewCandidat  
         candidatPourAjouté.nom = prompt("   Nom : ")
         candidatPourAjouté.prenom = prompt("   Prénom : ")
         candidatPourAjouté.partiPolitique = prompt("   Parti Politique : ")
         if (candidatPourAjouté.partiPolitique === ""){
            candidatPourAjouté.partiPolitique = "Independant"
         }
         candidatPourAjouté.age = parseInt(prompt("   Age : "))
         while(candidatPourAjouté.age < 0){
            console.log("Invalide age")
           candidatPourAjouté.age = parseInt(prompt("   Age : ")) 
         }
         candidatPourAjouté.electeurs = []
         candidats.push(candidatPourAjouté)
    }
    console.log(" ")
    if (candidatPourAjouté){
        console.log("        Candidat a été ajouté avec succès.")
    }
    
}
ajouteCandidat()

