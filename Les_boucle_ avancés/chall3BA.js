const prompt= require('prompt-sync')();
const math = require("mathjs");
const nombre = parseInt(prompt("Donner moi un entier: "))



for (let u = 2; u <= nombre ; u++){
    let bool = true
    for (let j = 2 ; j <= math.floor(math.sqrt(u)); j++){
        if (u % j === 0 ){
            bool = false
        }
        
}
    
    if (bool === true){
    console.log(u)
}
}