const prompt = require('prompt-sync')();
let elements = [];
let count = parseInt(prompt("How many Element do you want to push:  "))
let push 
for (let i = 1; i<= count ; i++){
    push = prompt(`push_${i} : `) 
    elements.push(push)

}
console.log(elements)