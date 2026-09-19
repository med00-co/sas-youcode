const prompt = require('prompt-sync')();
const nums = []
console.log("quel est let le nombre des nombres que vous voullez d'ajouter ;")
let howMany = parseInt(prompt("===>  "));
let ajoute
let somme = 0
for (let i = 1 ; i<= howMany; i++){
   ajoute = parseInt(prompt(`nombre_${i} : `)) 
//     i can  change nums to a variable , and in this line write nums += ajoute
   nums.push(ajoute)
   somme = somme + ajoute
}
console.log(nums.join(" + "))
console.log(`la somme est: ${somme}`)