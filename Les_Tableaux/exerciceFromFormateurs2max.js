const tableau = [12 , 2 , 76, 8 , 55, 45]
let max = tableau[0]
let max2 = 0
for (let tab of tableau ){
    if (tab > max){
        max2 = max
        max = tab
    }
    }
    for (let i = tableau.indexOf(max); i< tableau.length; i++){
  if (max !== tableau[i]){
    if (max2 < tableau[i]){
      max2 = tableau[i]
    }
  }
}
console.log(tableau)
console.log(max)

// tableau[tableau.indexOf(max)] = undefined
// let maxT = tableau[0]
// for (let tab of tableau ){
//     if (tab > maxT){
//         maxT = tab
//     }
// }
// console.log(maxT)

console.log(max2)
