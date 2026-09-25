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





while(true){
  let cinDeCandidatpourLeVoter = prompt("       Entrer CIN de candidat: ")
  for(let i =0; i< candidats.length; i++){
      var trouverCandidatVote = true
    
          if (cinDeCandidatpourLeVoter == candidats[i].cin ){
                  candidats[i].electeurs.push(cinDeCandidatpourLeVoter)
                  console.log("votre vote a été effectuer avec succès .")
  
          }else{
              trouverCandidatVote = false
              continue
          }
  }
  if (trouverCandidatVote == false){
      console.log("ni candidat trouvé avec ce CIN ;")
  }else{
      break
  }
}