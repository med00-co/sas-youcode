const prompt = require('prompt-sync')();
const point = {
    x: undefined,
    y: undefined
}

while(point.x !== "exit" || point.y !== "exit"){
    point.x = (prompt("Entrer x: "))
    if (point.x == "exit"){
        break
    }
    point.y = (prompt("Entrer y: "))
    console.log(point)
    console.log("to exit just print exit ")
    console.log(" ")
}