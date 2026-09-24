const math = require('mathjs');

const prompt = require('prompt-sync')();
const num = parseInt(prompt("Donner moi le nombre des lignes: "))
const etoiles =[]
let etoile = "*"
let space = ""
let spaces = []
for (let i = 1 ; i<= math.floor(num*2 )/2 ; i++){
    
    space += " "
    spaces.push(space )
}
spacesLong = spaces.length -1
console.log(space)

for(let i=1 ;i <= num;i++){
    
    
        etoiles[i-1]= etoile
        console.log( spaces[spacesLong] + etoile + spaces[spacesLong] )
        etoile += "**"
        spacesLong -= 1
}

