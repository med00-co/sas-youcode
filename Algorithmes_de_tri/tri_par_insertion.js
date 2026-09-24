function triInsertion(tab){
  for(let i = 1;i< tab.length ; i++){
    let x = tab[i]

    while(i > 0 && x < tab[i-1]){
      tab[i] = tab[i-1]
      i-= 1
    }
    tab[i] = x
  }
console.log(tab)
}
const myAr = [151, 54, 569, 8, 65, 32]
triInsertion(myAr)