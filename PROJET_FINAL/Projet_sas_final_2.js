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
function voterPourCandidat(){
    console.log(`
        ==================================================
                        ESPACE DE VOTE

    `)
    console.log(`
        Bonjour !
        s'il vous plait , suivre les instructions suivantes . 
        ---------------------------------------------------
        Les candidats disponibles: 
    `)
    for(let cinName of candidats){
        console.log("- ", cinName.nom ," ", cinName.prenom , "; CIN : ", cinName.cin)
    }
    
    console.log("        ---------------------------------------------------")



    let cinDeVoter = prompt("             Entre votre CIN: ")
    for(let i =1; i<= 1; i++){
        let verifierCinVoteCount = 0
        for (let u = 0; u< candidats.length ; u++){
            for(let j =0 ; j<= candidats[u].electeurs.length; j++ ){
                if(cinDeVoter === candidats[u].electeurs[j] ){
                    console.log(` 
                        Vous avez déja voter , 
     et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau.
                        `)
                    verifierCinVoteCount ++
                }
            }
        } 
        if (verifierCinVoteCount >= 1){
            break;
        }
        // let cinDeCandidatpourLeVoter = prompt("Entrer CIN de candidat: ")
        while(true){
             let cinDeCandidatpourLeVoter = prompt("             Entrer CIN de candidat: ")
             let trouverCandidatVote = false
             for(let i =0; i< candidats.length; i++){
    
                if (cinDeCandidatpourLeVoter == candidats[i].cin ){
                     candidats[i].electeurs.push(cinDeVoter)
                     console.log("votre vote a été effectuer avec succès .")
                     trouverCandidatVote = true
                }

             }
             if (trouverCandidatVote ){
                 break
             }else{
                 console.log("ni candidat trouvé avec ce CIN ;")
             }
        }
        
    }
}
voterPourCandidat()

