const prompt = require("prompt-sync")();
const books = [
  { id: 1,
    titre: "L'Étranger", 
    auteur: "Albert Camus", 
    prix: 120, 
    quantite: 12
},
  { id: 2, 
    titre: "1984", 
    auteur: "George Orwell",
    prix : 100,
    quantite: 7
 },
  { id: 3, 
    titre: "Les Misérables", 
    auteur: "Victor Hugo", 
    prix: 199,
    quantite : 3
 },
  { id: 4, 
    titre: "Dune", 
    auteur: "Frank Herbert",
    prix: 135,
    quntite: 17
 },
  { id: 5, 
    titre: "Le Petit Prince", 
    auteur: "Antoine de Saint-Exupéry",
    prix: 147,
    quantite: 2
 }
];
console.log(`
          ====================================================== 
                      GESTION DE STOCK DE LIBRAIRIE           
          ====================================================== 
                1 - Ajouter un livre au stock               
                2 - Afficher tous les livres disponibles      
                3 - Rechercher un livre par son titre         
                4 - Supprimer un livre du stock              
                5 - Afficher le nombre total de livres en stock  
                6 - exit
          ======================================================                       
`)


function Ajoute(livre){
    let nombre = prompt("Donner moi combien de livres voulez vous les ajoutez: ")
    for (let  i = 1; i<= nombre; i++){
        let livre = {}
        console.log("s'il vous plait entrer les informations du livre ;")
        livre.titre = prompt("Titre: ")
        livre.auteur = prompt("Auteur: ")
        livre.prix = prompt("Prix: ")
        livre.quantite = parseInt(prompt("Quantité en stock: "))
        console.log("Livre a été ajouté avec succès! ")
    }
}
function Affiche(){
    console.log("Les livres disponibles maintenant : " +books)
    
}
function Supprimer(liv){
    console.log("Les livres dans la bibliotique:  ")
   for (let book of books){
    console.log(`.${book.titre}`)
   }
    console.log(" ")
    let liv = prompt("Entrer le titre de livre pour le supprimer:  ").trim().toLowerCase()
    for (let bok of books ){
        if (liv == bok.toLowerCase()){
            
        }
    }
}



let choose = prompt("votre séléction : ")
switch (choose){
    case 1: 
    case 2:
    case 3:
    case 4:
    case 5:
    default: 
      console.log("Désolé , votre séléction est incorrecte;")
}
