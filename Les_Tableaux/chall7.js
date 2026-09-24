const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("Combien d'élément voullez vous de les entrer:  "))
let nums = []
for (let i = 1 ; i <= nombre ; i++){
    let number = parseInt(prompt(`nombre_${i}: `))
    nums.push(number)
}
for (let i= 0 ; i < nums.length ; i++){
    for (let j = i+1 ; j < nums.length ; j++){
        if (nums[i] > nums[j]){
            let result = nums[j]
            nums[j] = nums[i]
            nums[i] = result
        }
    }
}
console.log(`les nombres par ordre croissant: ${nums.join(" < ")}`)