let arrayFilmes1 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã", "a vida é bela"]
let arrayFilmes2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

function maiusculo(arrayQualquer){
    let a = arrayQualquer.length
    let i = 0

    while(i<a){
        arrayQualquer[i] = arrayQualquer[i].toUpperCase()  
        i++
    }
      return arrayQualquer
}

function juntarArrays(arrayQualquer1, arrayQualquer2){
    let e = arrayQualquer2.length
    let arrayFinal = arrayQualquer1

    for(i=0;i<e;i++){
        arrayFinal.push(arrayQualquer2[i])
    }
    let infiltrado = arrayFinal.pop()
    console.log(infiltrado)
    return arrayFinal
}


console.log(juntarArrays(arrayFilmes1, arrayFilmes2))