let array1 = ["moto1", "moto2", "moto3"]
let array2 = ["carro1", "carro2", "carro3"]


function passarElementos(array1, array2){
    let b = array2.length
    for(i=0;i<b;i++){
        array1.push(array2.pop().toUpperCase())
    }
   // let infiltrado = array2[b-1]
    array1.pop()
    return console.log(array1)
}


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

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

console.log(comparar(asiaScores, euroScores)); 
