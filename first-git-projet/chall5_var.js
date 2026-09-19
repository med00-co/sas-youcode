const prompt = require('prompt-sync')();
let temperature = Number(prompt("Entrer la température de l'objet en Celisius : "))
console.log(" ")
if (temperature < 0 ){
    console.log("l'objet est un ° solide")
}else if(0 <=temperature < 100){
    console.log("l'objet est un ¨ liquide")
}else{
    console.log("l'objet est un ~ Gaz")
}
console.log(" ")