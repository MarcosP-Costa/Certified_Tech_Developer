let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]
let array1 = ["moto1", "moto2", "moto3"]
let array2 = ["carro1", "carro2", "carro3"]
let asia = [1, 2, 4, 10]
let europa = [2, 3, 4, 10]

function converterMinEmMaius(array){
    let a = peliculas.length
    for(i=0;i<a;i++){
        array[i] = array[i].toUpperCase()
    }
    return array
}

function passarElementos(array1, array2){
    let b = array2.length
    for(i=0;i<b;i++){
        array1.push(array2.pop().toUpperCase())
    }
    return array1
}

function comparar(asia, europa){
    let compararAsiaEuropa = []
    let c = asia.length
    let d = europa.length
    if(c>d){
      for(i=0;i<c;i++)  {
          compararAsiaEuropa[i] = asia[i] === europa[i]
      }
    }else{
        for(i=0;i<d;i++)  {
            compararAsiaEuropa[i] = asia[i] === europa[i]
        }
    }

    return compararAsiaEuropa
}


