const prompt = require('prompt-sync')(); 
let jour = parseInt(prompt("Entrer le jour actuel en nombre: "))
let mois = parseInt(prompt("Entrer le moix actuel en nombre: "))
let moiLettre
switch (mois){
    case 1:
      moiLettre  = "Janvier"  
      break;
    case 2 :
      moiLettre = "Fevreier"  
      break;
    case 3:
      moiLettre = "Mars"
      break;
    case 4:
        moiLettre = "Avril"
        break
    case 5:
        moiLettre = "Mai"
        break;
    case 6: 
        moiLettre = "Juin"
        break ;
    case 7: 
        moiLettre = "Juillet"
        break;
    case 8: 
        moiLettre = "Aout"
        break;
    case 9: 
        moiLettre = "Septembre"
        break;
    case 10 : 
        moiLettre = "Octobre"
        break;
    case 11:
        moiLettre = "Novembre"
        break;
    case 12:
        moiLettre = "Decembre"
        break;
}

let year = parseInt(prompt("Entrer l'ans actuel: "))
console.log(`La date est : ${jour}-${moiLettre}-${year}`)
