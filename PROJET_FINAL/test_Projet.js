const prompt = require("prompt-sync")()
let candidatPourAjouté = {}

candidatPourAjouté.age = parseInt(prompt("   Age : "))
while(candidatPourAjouté.age < 0){
     console.log("Invalide age")
     candidatPourAjouté.age = parseInt(prompt("   Entrer un valide Age : ")) 
}
console.log(candidatPourAjouté)