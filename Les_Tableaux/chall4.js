// trouver le maximum
const prompt = require('prompt-sync')();
let count = parseInt(prompt("donner moi le nombre des entiers que vous les ajoutez: "))
const list = []
let push 
for (let i = 1; i<= count ; i++){
    push = parseInt(prompt(`numbre_${i} : `))
    list.push(push)
}
console.log(list)
let max = list[0]
for (let a = 0; a < list.length ; a++){
    if (max < list[a]){
        max  = list[a]
    }
  
}
console.log(`le grand nombre est : ${max}`)