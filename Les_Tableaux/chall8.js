const prompt = require('prompt-sync')();
const listNum = parseInt(prompt("combien d'élement voulez vous les ajouter : "))
const list = []
for (let i = 1; i <= listNum; i++ ){
    let element = prompt(`element_${i}: `)
    list.push(element)
}
const copie =[]
for (let text of list){
    copie.push(text)
}
console.log(`The original list : ${list.join(", ")}`)
console.log(`the copie: ${copie}`)