const prompt = require('prompt-sync')();
console.log("donner nous 3 notes pour vos donner la moyenne pondéré. ")
var n1 = Number(prompt("note1 : "))
while(n1 < 0 || n1 >20){
    console.log("Invalid note")
    n1 = Number(prompt("Entre un valide note: "))
    if (0 <= n1 && n1 <= 20){
        break
    }
}
var n2 = Number(prompt("note2 : "))
while(n2 < 0 || n2 >20){
    console.log("Invalid note")
    n2 = Number(prompt("Entre un valide note: "))
    if (0 <= n2 && n2 <= 20){
        break
    }
}
var n3 = Number(prompt("note3 : "))
while(n3 < 0 || n3 >20){
    console.log("Invalid note")
    n2 = Number(prompt("Entre un valide note: "))
    if (0 <= n3 && n3 <= 20){
        break
    }
}
let average = (n1*2 + n2*3 + n3*5 )/10
console.log(" ")
console.log(`la moyenne pondéré est : ${average}`) 