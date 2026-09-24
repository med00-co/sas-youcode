function triBulles(tableau){
    let longueur = tableau.length


    for(let i = 0; i< longueur -1; i++){

        for(let j =0; j< longueur -1  -i; j++){

            if (tableau[j]> tableau[j+1]){
                let temp = tableau[j]
                tableau[j]= tableau[j+1]
                tableau[j+1]= temp 

            }
        }

    }
console.log(tableau)
}
const  field = [13, 4, 55,90,43, 67]
triBulles(field)




