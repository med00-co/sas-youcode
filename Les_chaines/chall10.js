const prompt = require('prompt-sync')();
let chainePrincipale = prompt("entrer le principale texte : ")
let sousChaine = prompt("Chercher : ")
if (chainePrincipale.includes(sousChaine)){
    console.log("Trouvé")
}else{
    console.log("Non trouvés")
}