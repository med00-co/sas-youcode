const { parse } = require('mathjs');

const prompt = require('prompt-sync')();
let nombreElement = parseInt(prompt("combien d'élements voulez vous: "))
let tableaux = []
for (let i = 0; i< nombreElement; i++){
    let element = parseInt(prompt(`nombre_${i+1}: `))
    tableaux[i] = element

}
console.log(tableaux)
let cherche = parseInt(prompt("Element cherchés: "))
let trouve = 0
for (let tab of tableaux){
    if (tab === cherche){
        trouve = 1
    }
}
if (trouve === 1){
    console.log("Elément trouvés")
}else{
    console.log("Element n'est pas trouvés")
}