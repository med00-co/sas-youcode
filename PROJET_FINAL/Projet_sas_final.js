
const prompt = require('prompt-sync')();
//  liste des candidats -----------------------------------------------------------------------------
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


//  -------------------------------------------------------------------------------------------------------------
// Functions of program ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

// function of affiche
function afficheCandidat(){
    console.log(`
      ========================================================
                     Afficher les candidats

`)
    console.log(`
          1 - Affichage simple 
          2 - Tri par nombres de votes
          3 - Filtrer par un parti politique spécifique 
`)
    //  switch starts     ssssssssssssssssssssssssssssssssssssssssss
let afficheItsChoose = parseInt(prompt("Votre choix: "))
switch (afficheItsChoose){
    
    
    case 1:
        for (let candidat of candidats){
            console.log(`
                ----------------------------------------
                CIN : ${candidat.cin}
                Nom : ${candidat.nom}
                Prénom: ${candidat.prenom}
                Parti Politique: ${candidat.partiPolitique}
                Age : ${candidat.age}
                Nombres de votes: ${candidat.nombresVotes}
            `)
        }
        break;


    case 2:
        for (let u = 0; u< candidats.length ; u++){
          for (let j = 0; j< candidats.length ; j++){
            if (votes[j] < votes[j+1] ){
                let temp = votes[j]
                votes[j]= votes[j+1]
                votes[j+1]= temp
            }
          }
        }
        for (let i=0; i< votes.length ; i++){
            for (let j =0; j< candidats.length ; j++){
                if (votes[i] === candidats[j].nombresVotes){
                    console.log(i+1 , "- " ,
                        `
                ----------------------------------------
                CIN : ${candidats[j].cin}
                Nom : ${candidats[j].nom}
                Prénom: ${candidats[j].prenom}
                Parti Politique: ${candidats[j].partiPolitique}
                Age : ${candidats[j].age}
                Nombres de votes: ${candidats[j].nombresVotes}
            `
                    )
                }
            }
        }
        break;


    case 3:
        const partiPolitiqueDemandePourFiltrer = prompt("Entrer Partie politique:  ").trim().toLowerCase()


        for (let candit of candidats){
            if (candit.partiPolitique.toLowerCase() == partiPolitiqueDemandePourFiltrer){
              console.log(`
                ----------------------------------------
                CIN : ${candit.cin}
                Nom : ${candit.nom}
                Prénom: ${candit.prenom}
                Parti Politique: ${candit.partiPolitique}
                Age : ${candit.age}
                Nombres de votes: ${candit.nombresVotes}

              `)
        
            }else{
                console.log("           Désolé, La partie politique n'est pas trouvé. ")
            }
            
            
        }
        break;
    default:
        console.log("              Choix invalide !!")
}
}

//  affiche and switch end sssssssssssssssssssssssssssssssssssssssssssssssssssssssss
//  ajoute function start jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj

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

// jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj

//  la fonction du front  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
function front(){
console.log(`
        =================================================
              GESTION DES ELECTIONS - MAROC
        =================================================  
           1- Afficher la liste des candidats
           2- Ajouter un nouveau candidat
           3- Ajouter plusieurs candidats à la fois
           4- Voter pour un candidat
           5- Modifier les informations d'un candidat
           6- Supprimer un candidat 
           7- Rechercher un candidat
           8- Statistiques de l'élection 
           0- Quitter     
`)
console.log("        =================================================")
var choose = parseInt(prompt("Votre séléction : "))
}
front()
// ;;;;;;;;;;;;;;;;;;; Require Functions ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

switch(choose){ 
    case 1: 
       afficheCandidat()
       break;
    case 2:
       ajouteCandidat()
       break;
    case 3:
        ajoutePlusieur()
        break;
    case 4:
        voterPourCandidat()
        break;
    case 5:
        modifierInformationCandidat()
        break;
    case 6:
        supprimerCandidat()
        break;
    case 7:
        rechercherCandidat()
        break;
    case 8:
        staitstiqueElection()
        break;
    default:
        console.log("Votre séléction est introuvable! ")
    
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; require end ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;