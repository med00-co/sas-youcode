const prompt = require('prompt-sync')();
const listNum = parseInt(prompt("combien d'élement voulez vous les ajouter : "))
let list = []
let tmp = [];
for (let i = 0; i < listNum; i++ ){
    let element = prompt(`element_${i}: `)
    list.push(element);
}

for (let i = listNum - 1; i >= 0; i--) {
    tmp.push(list[i]);
}
console.log(`The original list : ${list}`)
console.log(`the copie: ${tmp}`)
