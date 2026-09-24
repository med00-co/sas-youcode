const prompt = require("prompt-sync")();
const nombre = parseInt(prompt('Donner moi un nombre: '))
for (let i=1; i < nombre ; i++){
   if (nombre % i === 0){
    console.log(i)
   }
}