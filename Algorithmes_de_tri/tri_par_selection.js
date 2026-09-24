function triSelection(tab){
    let n = tab.length
    for(let i=0 ; i< n-1; i++){
        var min = i
        for(var j = i+1; j< n; j++){
            if (tab[j]< tab[min]){
                
                let temp = tab[j]
                tab[j] = tab[min]
                tab[min] = temp
                
            }
        }


    }
    console.log(tab)
}
const tableau = [23, 78, 345, 98, 2, 8]
triSelection(tableau)