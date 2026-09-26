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

afficheCandidat()
