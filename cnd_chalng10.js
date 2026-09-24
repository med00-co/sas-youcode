const prompt = require('prompt-sync')(); 
const nombre = parseInt(prompt("combien de nombre voullez vous: "))
const list = []
for (let i=1; i<= nombre ; i++ ){
    let numero = parseInt(prompt(`nombre_${i}: `))
    list.push(numero)
}
let num = parseInt(prompt("Donner moi un nombre: "))
let differences = []
let diff  = 0
let close 

for (let i =0; i<list.length ; i++){
    if (num > list[i]){
        diff = num - list[i]
    }else{
        diff = list[i] - num
    }
    differences.push(diff)
}
let min = differences[0]
for (let fid of differences){
    if (fid < min){
        min = fid
    }
}
close = list[differences.indexOf(min)]
console.log(list)
console.log("the closer number is ", close)