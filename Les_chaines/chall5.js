const prompt = require('prompt-sync')();
let caractere = prompt("Entrer des caractères:  ")
let cari = []
for (let i = caractere.length -1 ; i>= 0 ; i--){
    
    let b= caractere[i]
    cari.push(b)
}
console.log(cari.join(""))