
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

for(let cana of candidats){
    cana.nombresVotes = cana.electeurs.length
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
                Age : ${candidat.age}
                Parti Politique: ${candidat.partiPolitique}
            `)
        }
        break;


    case 2:
        for (let u = 0; u< candidats.length -1 ; u++){
          for (let j = 0; j< candidats.length -1 -u ; j++){
            if (candidats[j].nombresVotes < candidats[j+1].nombresVotes ){
                let temp = candidats[j]
                candidats[j]= candidats[j+1]
                candidats[j+1]= temp
            }
          }
        }
        let ordreF = 1
        for(let cad of candidats){
          console.log(`
          * ${ordreF}  ----------------------------------------
                CIN : ${cad.cin}
                Nom : ${cad.nom}
                Prénom: ${cad.prenom}
                Age : ${cad.age}
                            - Nombres de votes: ${cad.nombresVotes}
            `)
            ordreF ++
        }
        break;


    case 3 :
        // ce code est pour affich les parties politiques qui sont existes
        let politiqueExiste = []
        for (canad of candidats){
            for (pol of politiqueExiste){
                if (pol != canad.partiPolitique){
                    politiqueExiste.push(canad.partiPolitique)
                }
            }
        }
        console.log("Les parties politiques existes : ")
        console.log("     ", politiqueExiste.join(" - "))
        //----------------------------------------------------------------- 

        const partiPolitiqueDemandePourFiltrer = prompt("Entrer Partie politique:  ").trim().toLowerCase()

        let existOfPartiPol = false
        for (let candit of candidats){
            if (candit.partiPolitique.toLowerCase() == partiPolitiqueDemandePourFiltrer){
              console.log("-    ", partiPolitiqueDemandePourFiltrer.toUpperCase())
              console.log(`
                ----------------------------------------
                CIN : ${candit.cin}
                Nom : ${candit.nom}
                Prénom: ${candit.prenom}
                Parti Politique: ${candit.partiPolitique}
                Age : ${candit.age}
              `)
              existOfPartiPol = true
        
            }
        }
        if (existOfPartiPol === false){
            console.log("           Désolé, La partie politique n'est pas trouvé. ")
        }
        break;
    default:
        console.log("              Choix invalide !!")
}
}

//  ----------------------------------------------------------------------------------------------------------

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
    console.log(" ")
    
}

// jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj


// AjoutePlusieurs function pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
function ajoutePlusieur(){
    let nombreDeCandidatPourAjouter = parseInt(prompt("Combien de candidat voulez vous de les ajoute : ")) 
    for (let i= 1; i<= nombreDeCandidatPourAjouter ; i++){
        ajouteCandidat()

    }
}
// ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp

// Voter Function -------------------------------------------------------------------------
function voterPourCandidat(){
    console.log(`
        ==================================================
                        ESPACE DE VOTE

    `)
    console.log(`
        Bienvenue à l'espace voter !
        s'il vous plait , suivre les instructions suivantes . 
        ---------------------------------------------------
        Les candidats disponibles: 
    `)
    for(let cinName of candidats){
        console.log("- ", cinName.nom ," ", cinName.prenom , "; CIN : ", cinName.cin)
    }
    
    console.log("        ---------------------------------------------------")
    console.log(" ")


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
// -------------------------------------------------------------------------------------
// Modifier les informations d'un candidat function -----------------------------------------------
function modifierInformationCandidat(){
    console.log(`
        ==================================================
                 MODIFICATION DES INFORMATIONS
                        -- CANDIDAT --

    `)
    console.log(`
        Bienvenue! 
          les commandes:
           1 - Modifier le parti politique d'un candidat
           2 - Modifier l'âge d'un candidat

    `)
    let chooseModifier = parseInt(prompt("   Votre choix: "))
    switch (chooseModifier){



        case 1:
            let  cinCandidatPourModifier = prompt("Taper CIN du candidat : ")
            let ModifieEtTrouve = false
            for(let candide of candidats ){
                if (cinCandidatPourModifier === candide.cin){
                    console.log(" ")
                    console.log("  candidat trouvé --")
                    console.log(`
                        CIN : ${candide.cin}
                        Nom : ${candide.nom}
                        Prénom : ${candide.prenom}
                        Parti Politique : ${candide.partiPolitique}
                        Age : ${candide.age}
                    `)
                    let partiPolModifie = prompt("Entrer la nouvelle parti politique: ")
                    candide.partiPolitique = partiPolModifie.trim()
                    ModifieEtTrouve = true
                }
            }
            if (ModifieEtTrouve === false ){
                console.log("  Candidat introuvable")
            }

            break;



        case 2:
            let  cinCandidatPourModifier2 = prompt("Taper CIN du candidat : ")
            let trouveModifie = false
            for (let candi of candidats){
                if(cinCandidatPourModifier2 === candi.cin){
                    console.log(" ")
                    console.log("candidat trouvé --")
                    console.log(`
                        CIN : ${candi.cin}
                        Nom : ${candi.nom}
                        Prénom : ${candi.prenom}
                        Parti Politique : ${candi.partiPolitique}
                        Age : ${candi.age}
                    `)
                    console.log(" ")
                    while(true){
                      var newAge = parseInt(prompt("     Entrer le nouveau age: "))
                      if (newAge < 0){
                        console.log("    Invalide age!")
                        newAge = parseInt(prompt("     Entrer le nouveau age: "))
                      }else{
                        break;
                      }
                    }
                    candi.age = newAge
                    console.log("Age a été modifié avec succès. ")
                    trouveModifie = true
                    
                }
                
            }
            if (trouveModifie === false){
                console.log("    Candidat introuvable !")
            }

            break;


        default: 
           console.log("            Choix incorrecte! ")
    }
}

// --------------------------------------------------------------- Modifier function end ------------------------------------------------
// supprimer function --------------------------------------------------------------------------------------------------------------------
function supprimerCandidat() {
    // function to delete ---------------
    function supprimer(tab, i) {

    for (i ; i < tab.length; i++) {
      tab[i] = tab[i + 1]
    }
    tab.length -= 1;
    return(tab)
    }
    // ----------------------------------


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
            supp = true
            let verifierDeSupprimer = parseInt(prompt("     étez-vous sùr ?  (1- Oui / 2- Non)  :  "))
            if (verifierDeSupprimer == 1){
                supprimer(candidats, q)
                console.log("  Candidat a été supprimé avec succès .")
                annule = false
            }else{
                console.log("  la suppression a été annulé .")
                break;
            }
        }
    }

    if (supp === false){
        console.log("  Ce Candidat n'existe pas .")
        break;
    }
    if (annule === true){
          
    }
}
}
// ----------------------------------------------------------------------------------------------------------------------------------------
// Rechercher function ---------------------------------------------------------------------------------------
function rechercherCandidat(){
    console.log(`
        =======================================================
                      RECHERCHE D'UN CANDIDAT
    `)
    console.log(`
      Bienvenue dans l'espace de recherche;
        Entrez le nom de candidat que voulez vous de cherche dans 
           la case de recherche .
    `)

    let candidatNomRecherché = prompt("  |->  Recherche ( Nom de candidat ) : ").trim().toLowerCase()
    let chercheTrouve = false
    for(let candud of candidats){
        if (candidatNomRecherché === candud.nom.toLowerCase()){
            console.log("Candidat trouvés .")
            console.log(`
                ----------------------------------------
                CIN : ${candud.cin}
                Nom : ${candud.nom}
                Prénom: ${candud.prenom}
                Age : ${candud.age}
                Parti Politique: ${candud.partiPolitique}
                   Nombre de votes: ${candud.nombresVotes}
            `)
            chercheTrouve = true
        }
    }
    if (chercheTrouve === false){
        console.log("     Candidat non Trouvés .")
    }
    console.log(" ")
}
// -------------------------------------------------------------------------------------------------------------
// Statistiques functions -----------------------------------------------------------------------------------
function staitstiqueElection(){
    //  Nombre total de candidats 
    let nombreTotalCandidat = candidats.length

    // Nombres total de votes
    let nombreTotalVote = 0
    for (cind of candidats ){
        nombreTotalVote += cind.nombresVotes
    }

    // Top 3 
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
    
    // Nombre de candidat dans chaque parti politique 
    let partiAvecNombre = {}
    candidats.forEach(cond =>{
        
      if (partiAvecNombre.hasOwnProperty(cond.partiPolitique) ){
        partiAvecNombre[cond.partiPolitique] ++
      }else{
        partiAvecNombre[cond.partiPolitique]= 1
      }
    })

    // print the front 
    console.log(`
        ==============================================================================
        =                    STATISTIQUES DE L'ELECTION                              =
        =                                                                            =
    `)
    console.log(`
           - Nombre total de candidats : ${nombreTotalCandidat}  candidat.
           - Nombre total de votes     : ${nombreTotalVote}  vote.
           
           - Top 3 candidat (par nombre de votes) : 
                     1 - ${firstTopCANDIDAT}       ${firstTop} votes.
                     2 - ${secondTopCANDIDAT}      ${secondTop} votes.
                     3 - ${thirdTopCANDIDAT}       ${thirdTop} votes.

           - Nombre de candidat dans chaque parti politique: `)
    for (let paraKey in partiAvecNombre){
            console.log("                ",paraKey , " : ", partiAvecNombre[paraKey])
    }
    console.log(" ")
}
// ----------------------------------------------------------------------------------------------------------
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
}
front()
// ;;;;;;;;;;;;;;;;;;; Require Functions ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
let choose = parseInt(prompt("Votre séléction : "))
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
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; require functions end ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;