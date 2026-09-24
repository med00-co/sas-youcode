myObj ={
    name: "med",
    age: 19,
    sport: "boxing"
}
function countProperty(obj){
    var count = 0
    for (var prop in obj){
        if (obj.hasOwnProperty(prop)){
            count++
        }
    }
    return count
}
console.log(countProperty(myObj))