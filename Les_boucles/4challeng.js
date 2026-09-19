const { num } = require("mathjs");

const prompt = require("prompt-sync")(); 
let numImpair = []
let n = parseInt(prompt("Entrer le nombre des nombres impairs que vous voulez: "))

for (let i = 1 ; numImpair.length < n ; i++){
    if (i % 2 !== 0){
      numImpair.push(i)
    }else{
        continue
    }
}
console.log(numImpair.join(", "))