const prompt = require('prompt-sync')();
let numsOfNums = parseInt(prompt("Combien de chiffres voulez-vous entrer ? : "))
let facteur = parseInt(prompt("Entrer le facteur de multiplication : "))
let nums = []
let Multiples = []
for (let i=1; i<= numsOfNums ; i++){
    let nombre = parseInt(prompt(`Nombre_${i}: `))
    nums.push(nombre)
    let npm = nombre * facteur
    Multiples.push(npm)
}
console.log(`vous avez tapé: ${nums.join(", ")}`)
for (let a= 0; a < nums.length ; a++){
    
        console.log(`${nums[a]} * ${facteur} = ${Multiples[a]}`)

}
console.log(`Produit par ${facteur} : ${Multiples.join(", ")}`)

