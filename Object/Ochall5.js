const prompt = require('prompt-sync')();
const books = {
    livre1 : {
    titre : "Classic literature",
    auteur: "George Orwell",
    publie : 1949,
    avis: "4 stars"
    },
    livre2: {
      titre : "Cent ans de solitude",
      auteur : "Gabriel garcia Marquiz",
      publie : 465
    },
    livre3: {
        titre : "Le petit livre rouge",
        auteur : "Mao Zedong",
        publie: 1287
    },
}
let choice =  "oui" 
while(choice === "oui"){
const avis = parseInt(prompt("quel livre voulez vous: 1/2/3 : "))
switch(avis){
    case 1: 
      console.log(books.livre1)
      break;
    case 2: 
      console.log(books.livre2)
      break;
    case 3:
        console.log(books.livre3)
        break;
    default : 
     console.log("Malheureusement , il n'y a pas ce case ")
}
choice = prompt("voulez vous de continuez? oui/non : ").toLowerCase()
}