let arase = "hello world"
let long = 0
for(let i = 0 ; i >= -1; i++){
    if (arase[i]){
        long ++
    }else {
        break
    }
}
console.log(`the number of elements is: ${long}`)