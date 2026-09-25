const prompt = require("prompt-sync")()
for(let i =0; i< 7; i++){
    let choose = parseInt(prompt("choose"))
    switch(choose){
        case 1: 
          console.log("you and me")
          break;
        case 2:
            console.log("shit")
            break;
        case 3:
            break
            break
        default:
            console.log("wrong")
            break
    }

}