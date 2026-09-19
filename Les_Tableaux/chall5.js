// trouver le minimun
const prompt = require('prompt-sync')();
let count = parseInt(prompt("donner moi le nombre des entiers que vous les ajoutez: "))
const list = []
let push 
for (let i = 1; i<= count ; i++){
    push = parseInt(prompt(`numbre_${i} : `))
    list.push(push)
}
console.log(list)
let min = list[0]
for (let a = 0; a < list.length ; a++){
    if (min > list[a]){
        min  = list[a]
    }
  
}
console.log(`le petit nombre est : ${min}`)